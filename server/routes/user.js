const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

router.use((req, res, next) => {
  console.log("正在接受一個使用者路徑的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send(req.user); // 因經過jwt的保護，認證通過後在req.user內增添通過保護當下跟資料庫取得的個人資料
});

module.exports = router;
