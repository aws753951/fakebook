const router = require("express").Router();

router.use((req, res, next) => {
  console.log("正在接受一個使用者路徑的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send("user route is showing");
});

module.exports = router;
