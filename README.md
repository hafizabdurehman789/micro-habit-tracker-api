# 🌿 Micro-Habit Tracker API

A production-ready RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. The Micro-Habit Tracker API enables users to build, monitor, and maintain daily micro-habits through automated streak tracking, habit categorizations, and duration estimation.

---

## 🛠️ Tech Stack & Tools

* **Backend Runtime:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB
* **Object Data Modeling (ODM):** Mongoose
* **Environment Management:** dotenv
* **Development Server:** Nodemon
* **API Testing & Verification:** Postman
* **Version Control:** Git & GitHub

---

## ✨ Features

* **Full CRUD Functionality:** Seamlessly create, read, update, and delete habit records.
* **Streak Management:** Custom `PATCH` endpoint to toggle daily completions and update habit streaks.
* **Data Validation:** Strict schema definitions using Mongoose enums, mandatory fields, default values, and timestamps.
* **Modular MVC Architecture:** Clean separation of concerns across Models, Controllers, and Routes.
* **Environment Security:** Sensitive configurations and database credentials managed via `.env` files.

---

## 📂 Project Structure

```text
micro_habit_api/
├── config/
│   └── db.js            # MongoDB connection logic
├── controllers/
│   └── habitController.js # API business logic and route handlers
├── models/
│   └── Habit.js         # Mongoose schema and data structure
├── routes/
│   └── habitRoutes.js   # Express route definitions
├── .env                 # Local environment variables (git-ignored)
├── .gitignore           # Ignored files (node_modules, .env)
├── package.json         # Project metadata and dependencies
└── server.js            # Application entry point

