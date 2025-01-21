const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    text: String,
    options: [String],
    correctAnswer: String,
  },
//   { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
