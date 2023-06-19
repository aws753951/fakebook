const router = require("express").Router();
// const User = require("../models/User");

router.use((req, res, next) => {
  console.log("正在接受一個使用者路徑的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send("user route is showing");
});

// 待做要更改個人資料的route
module.exports = router;
