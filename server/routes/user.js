const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const updateValidation = require("../validation").updateValidation;

router.use((req, res, next) => {
  console.log("正在接受一個使用者路徑的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send(req.user); // 因經過jwt的保護，認證通過後在req.user內增添通過保護當下跟資料庫取得的個人資料
});

// 更新個人資料(最大權限)
router.put("/:_id", async (req, res) => {
  if (
    // 確保jwt跟要更改的id是一致的
    req.params._id === req.user._id.toString() ||
    req.body.isAdmin
  ) {
    const { error } = updateValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }

    try {
      await User.findByIdAndUpdate(req.params._id, req.body);
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("只有本人才可更改個人資料");
  }
});

// delete user
// 已增添刪除帳號連帶好友關係(對方)也被刪除
router.delete("/:_id", async (req, res) => {
  if (req.params._id === req.user._id.toString() || req.body.isAdmin) {
    try {
      const currentUser = await User.findById(req.params._id);
      const friend_arr = currentUser.friends;
      for (let _id of friend_arr) {
        let foundUser = await User.findById(_id);
        await foundUser.updateOne({ $pull: { friends: req.params._id } });
      }
      await User.deleteOne({ _id: req.params._id });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("只有本人才可刪除個人資料");
  }
});

// follow user
// 待增添新增好友的確認連結*******
router.put("/:_id/follow", async (req, res) => {
  if (
    req.params._id !== req.body._id &&
    req.body._id === req.user._id.toString()
  ) {
    try {
      const foundUser = await User.findById(req.params._id);
      const currentUser = await User.findById(req.body._id); // 看要不要抓jwt的id
      if (!foundUser.friends.includes(req.body._id)) {
        // two ways to push user
        foundUser.friends.push(req.body._id);
        foundUser.save();
        await currentUser.updateOne({ $push: { friends: req.params._id } });
        res.status(200).json("User has been followed.");
      } else {
        res.status(403).send("你無法跟同一位好友加兩次");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).send("你無法加你自己為好友");
  }
});

// unfollow user
router.put("/:_id/unfollow", async (req, res) => {
  if (
    req.params._id !== req.body._id &&
    req.body._id === req.user._id.toString()
  ) {
    try {
      const foundUser = await User.findById(req.params._id);
      const currentUser = await User.findById(req.body._id);
      if (foundUser.friends.includes(req.body._id)) {
        await foundUser.updateOne({ $pull: { friends: req.body._id } });
        await currentUser.updateOne({ $pull: { friends: req.params._id } });
        res.status(200).json("User has been unfollowed.");
      } else {
        res.status(403).json("你早就跟對方解除好友關係了");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json("你無法跟自己解除好友關係");
  }
});

module.exports = router;
