const Result = require("../models/Result");

// Submit a result (Student Only)
exports.submitResult = async (req, res) => {
  const { examId, score } = req.body;

  try {
    const result = await Result.create({
      student: req.user._id,
      exam: examId,
      score,
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all results for the logged-in student
exports.getResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user._id }).populate("exam", "title");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
