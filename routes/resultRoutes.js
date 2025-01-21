const express = require("express");
const { submitResult, getResults } = require("../controllers/resultController"); 
const { protect, studentOnly } = require("../middlewares/authMiddleware"); 

const router = express.Router();

// Route to submit a result (Student Only)
router.post("/", protect, studentOnly, submitResult );


router.get("/", protect, studentOnly, getResults); 

module.exports = router;
