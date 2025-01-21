const express = require("express");
const { addQuestion } = require("../controllers/questionController");
const { protect, teacherOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// Routes for managing questions
router.post("/", protect, teacherOnly, addQuestion);

module.exports = router;
