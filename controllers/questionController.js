const Question = require("../models/Question");

// Add a question (Teacher Only)
exports.addQuestion = async (req, res) => {
  const { text, options, correctAnswer } = req.body;

  try {
    const question = await Question.create({
      text,
      options,
      correctAnswer,
    });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Additional functions like updateQuestion, deleteQuestion can be added as needed
