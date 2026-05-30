# 🎓 Online Learning & Course Recommendation Platform

## 📌 Project Overview

Online Learning & Course Recommendation Platform is a full-stack MERN application that allows learners to register, browse courses, receive personalized course recommendations, and track their learning journey.

The platform demonstrates modern full-stack development concepts including:

* User Authentication
* REST API Development
* MongoDB Database Design
* React Frontend Development
* Course Management
* Recommendation System Logic
* Client-Server Integration

This project was built as an EdTech-focused portfolio project to showcase Full Stack Development skills.

---

# 🚨 Problem Statement

Students often struggle to find the most relevant courses among thousands of available learning resources.

Traditional learning platforms provide large course catalogs but limited personalization.

This project solves that problem by:

* Understanding learner interests
* Matching learner skills
* Recommending relevant courses
* Improving course discovery
* Enhancing learning experience

---

# ✨ Features

## User Features

* User Registration
* User Login
* JWT Authentication
* Skill Selection
* Interest Selection

## Course Features

* Browse Courses
* View Course Details
* Course Categories
* Course Tags

## Recommendation Features

* Personalized Recommendations
* Skill-Based Recommendations
* Interest-Based Recommendations
* Category Matching
* Tag Matching

## Dashboard Features

* Modern Dashboard
* Course Statistics
* Learning Progress
* Recommended Courses Section

---

# 🤖 Recommendation Logic

The recommendation engine uses a simple hybrid filtering approach.

### Input

User Skills:

```text
React
JavaScript
Node.js
```

User Interests:

```text
Web Development
AI
```

### Course Data

Course Category:

```text
Web Development
```

Course Tags:

```text
React
Frontend
JavaScript
```

### Recommendation Process

1. Fetch user skills
2. Fetch user interests
3. Fetch all courses
4. Compare:

* User skills ↔ Course tags
* User interests ↔ Course category

5. Return matching courses

### Example

User:

```text
Skills:
React

Interests:
AI
```

Recommended Courses:

```text
React Mastery
AI Fundamentals
Full Stack Development
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT (JSON Web Tokens)
* bcryptjs

## Development Tools

* VS Code
* Postman
* MongoDB Compass
* Git
* GitHub

---

# 🏗 Architecture

## Frontend

```text
React Application
│
├── Login Page
├── Register Page
├── Dashboard
├── Course Listing
└── Recommendation Section
```

## Backend

```text
Express Server
│
├── Auth Routes
├── Course Routes
├── Recommendation Routes
└── Controllers
```

## Database

```text
MongoDB
│
├── Users
├── Courses
├── Enrollments
└── Progress
```

## Workflow

```text
User Registration
        ↓
User Login
        ↓
Skill & Interest Selection
        ↓
Browse Courses
        ↓
Recommendation Engine
        ↓
Course Enrollment
        ↓
Progress Tracking
```

---

# 📂 Folder Structure

```text
Online-Learning-Platform
│
├── client
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── CourseCard.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Courses.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── courseController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Course.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── courseRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

## Courses

### Get All Courses

```http
GET /api/courses
```

---

### Get Recommended Courses

```http
POST /api/courses/recommend
```

Request Body:

```json
{
  "skills": ["React"],
  "interests": ["AI"]
}
```

---

# 🚀 How To Run

## Backend Setup

Navigate to server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Run backend:

```bash
npm run dev
```

Backend URL:

```text
http://localhost:8000
```

---

## Frontend Setup

Navigate to client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 🎯 Learning Outcomes

Through this project I learned:

* MERN Stack Development
* REST API Design
* MongoDB Database Modeling
* React Component Architecture
* Authentication with JWT
* Password Hashing using bcrypt
* API Integration using Axios
* Recommendation System Fundamentals
* Client-Server Communication
* Git & GitHub Workflow
* Full Stack Project Deployment Concepts

---

# 🔮 Future Enhancements

* Video Lessons
* Course Enrollment System
* Progress Tracking Database
* AI-Based Recommendations
* Course Reviews & Ratings
* Instructor Dashboard
* Admin Panel
* Quiz System
* Certificates
* Payment Gateway Integration
* Email Notifications

---

# 👨‍💻 Author

VARSHA SAVALAGI
