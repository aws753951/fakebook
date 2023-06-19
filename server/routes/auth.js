const router = require("express").Router();

router.use((req, res, next) => {
  console.log("正在接收一個身分認證的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send("auth route is showing");
});

module.exports = router;
