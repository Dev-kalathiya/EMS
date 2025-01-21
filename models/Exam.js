const mongoose = require("mongoose");

const examSchema = mongoose.Schema(
  {
    title: String,
    description:String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
//   { timestamps: true }
);

module.exports = mongoose.model("Exam", examSchema);
