const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.use((req, res, next) => {
  console.log("正在接受一個發文路徑的請求");
  next();
});

router.post("/", async (req, res) => {
  // req.body.userID 是 post schema，避免產生的_id被錯認為user的id
  if (req.body.userID !== req.user._id.toString()) {
    // 記得幫忙導向*****************
    return res.status(403).send("請重新登入");
  }
  try {
    // 記得補上joi*****************
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// _id 為 Post的_id
router.put("/:_id", async (req, res) => {
  if (req.body.userID !== req.user._id.toString()) {
    return res.status(403).send("請重新登入");
  }
  try {
    const { _id } = req.params;
    // 若找不到可能會直接進入catch(err) 待查*******
    const postFound = await Post.findOne({ _id });
    if (!postFound) {
      return res.status(403).send("該文章已經不存在");
    }
    if (postFound && postFound.userID !== req.body.userID) {
      return res.status(403).send("限本人才可更新文章");
    }
    const updatedPost = await Post.findOneAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send(updatedPost);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete
router.delete("/:_id", async (req, res) => {
  if (req.body.userID !== req.user._id.toString()) {
    return res.status(403).send("請重新登入");
  }
  try {
    const { _id } = req.params;
    const postFound = await Post.findOne({ _id });
    if (!postFound) {
      return res.status(403).send("該文章已經不存在");
    }
    if (postFound && postFound.userID !== req.body.userID) {
      res.status(403).send("你不能刪除別人的文章");
    }
    await Post.deleteOne({ _id });
    return res.status(200).send("課程已被刪除");
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all personal and friends' articles
router.get("/articals/all", async (req, res) => {
  try {
    if (req.body.userID !== req.user._id.toString()) {
      return res.status(403).send("請重新登入");
    }
    const currentUser = await User.findById(req.body.userID);
    const userPosts = await Post.find({ userID: currentUser._id });
    const friendsPosts = await Promise.all(
      // iterable promises
      currentUser.friends.map((item) => {
        // return an array, but need time
        return Post.find({ userID: item });
      })
    );
    return res.status(200).send(userPosts.concat(...friendsPosts));
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
