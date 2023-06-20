require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes").user;
const authRoute = require("./routes").auth;
const passport = require("passport");
require("./config/passport")(passport);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Altas has been connected.");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json()); //解析JSON格式的請求，並把其附加到req.body
app.use(express.urlencoded({ extended: true })); //解析post當中的參數(x-www-form-urlencoded)，附加到req.body
app.use(helmet()); // 保護req用的
app.use(morgan("common")); //後續可針對使用者搜尋做log

app.use(
  "/api/user",
  passport.authenticate("jwt", { session: false }),
  userRoute
);
app.use("/api/auth", authRoute);

app.get("/check", (req, res) => {
  return res.send("OK");
});

app.listen(6969, () => {
  console.log("Port 6969 is running.");
});
