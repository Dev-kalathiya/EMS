const express = require("express");
const { createExam, getExams } = require("../controllers/examController");

const { protect, teacherOnly } = require("../middlewares/authMiddleware");

// console.log("createExam:", createExam); 
// console.log("getExams:", getExams); 
// console.log("protect:", protect); 
// console.log("teacherOnly:", teacherOnly); 

const router = express.Router();

router.post("/", protect, teacherOnly, createExam);
router.get("/", protect, getExams);

module.exports = router;
