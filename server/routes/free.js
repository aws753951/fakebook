const router = require("express").Router();
const Post = require("../models/Post");

router.get("/:_id", async (req, res) => {
  try {
    const postFound = await Post.findById(req.params._id);
    if (!postFound) {
      return res.status(403).send("該文章已經不存在");
    }
    res.status(200).json(postFound);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 取得所有人的PO文
router.get("/articals/all", async (req, res) => {
  try {
    const userPosts = await Post.find({});
    return res.status(200).send(userPosts);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
