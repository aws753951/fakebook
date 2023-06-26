const mongoose = require("mongoose");

const postschema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      maxLength: 5000,
    },
    img: {
      type: String,
    },
    goods: {
      // 待確認這種寫法*************
      likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      loves: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      hates: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  },
  //   doc time, need change
  { timestamps: true }
);

module.exports = mongoose.model("Post", postschema);
