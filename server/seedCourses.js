require("dotenv").config();

const mongoose = require("mongoose");

const Course = require("./models/Course");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Course.deleteMany();

    await Course.insertMany([
      {
        title: "React Mastery",
        description: "Learn React from scratch.",
        category: "Web Development",
        tags: ["React", "Frontend"],
      },

      {
        title: "Node.js Bootcamp",
        description: "Master backend development.",
        category: "Web Development",
        tags: ["Node", "Backend"],
      },

      {
        title: "MongoDB Essentials",
        description: "Learn NoSQL databases.",
        category: "Database",
        tags: ["MongoDB"],
      },

      {
        title: "AI Fundamentals",
        description: "Introduction to Artificial Intelligence.",
        category: "AI",
        tags: ["AI", "Machine Learning"],
      },

      {
        title: "Machine Learning Basics",
        description: "ML concepts and projects.",
        category: "AI",
        tags: ["Machine Learning"],
      },

      {
        title: "Cyber Security Basics",
        description: "Protect systems and networks.",
        category: "Cyber Security",
        tags: ["Security"],
      },

      {
        title: "Python for Data Science",
        description: "Python for analytics.",
        category: "Data Science",
        tags: ["Python"],
      },

      {
        title: "Full Stack Development",
        description: "Frontend + Backend complete course.",
        category: "Web Development",
        tags: ["React", "Node"],
      },
    ]);

    console.log("Courses Seeded Successfully");

    process.exit();
  })
  .catch(console.error);