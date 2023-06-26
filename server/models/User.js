const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  //   doc time, need change
  { timestamps: true }
);

// hash password before save user
userschema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    console.log("123");
    let hashpassword = await bcrypt.hash(this.password, 12);
    this.password = hashpassword;
    next();
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userschema);
