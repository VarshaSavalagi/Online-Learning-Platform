const Course = require("../models/Course");

// Get All Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Recommended Courses
exports.getRecommendedCourses = async (req, res) => {
  try {
    const { skills = [], interests = [] } = req.body;

    const courses = await Course.find();

    const recommendations = courses.filter((course) => {
      const skillMatch = course.tags.some((tag) =>
        skills.includes(tag)
      );

      const interestMatch = interests.includes(
        course.category
      );

      return skillMatch || interestMatch;
    });

    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};