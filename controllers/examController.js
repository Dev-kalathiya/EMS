const Exam = require("../models/Exam");

// Create a new exam (Teacher Only)
exports.createExam = async (req, res) => {
  const { title, description, questions } = req.body;

  try {
    const exam = await Exam.create({
      title,
      description,
      teacher: req.user._id, // Use the logged-in teacher's ID
      questions,
    });

    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all exams (Accessible to all authenticated users)
exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate("teacher", "name").populate("questions");
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
