const express = require("express");

const router = express.Router();

const {
  getAllCourses,
  getRecommendedCourses,
} = require("../controllers/courseController");

// Get all courses
router.get("/", getAllCourses);

// Get recommended courses
router.post(
  "/recommend",
  getRecommendedCourses
);

module.exports = router;