const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    score: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
