const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("正在接收一個身分認證的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send("auth route is showing");
});

router.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  const { error } = registerValidation({ username, email, password });
  if (error) {
    return res.status(400).send(error.details[0].message); // 記得於前端自行調整api吐出的結果
  }

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) return res.status(400).json("信箱已經被註冊過");
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save(); // 在schema內已經設定pre save要hash密碼
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const { error } = loginValidation({ email, password });
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) return res.status(400).send("帳號或密碼錯誤");

    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) return res.status(400).send("帳號或密碼錯誤");
    const tokenObject = {
      _id: foundUser._id,
      isAdmin: foundUser.isAdmin,
    };
    const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);

    // 若有要設定jwt過期時間來這邊設定
    res.status(200).send({
      jswitd: "JWT " + token,
      userinfo: {
        username: foundUser.username,
        email: foundUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
