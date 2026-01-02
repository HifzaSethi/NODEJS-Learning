# Chapter 10 – Airbnb Clone (MVC Architecture with Express & EJS)

This chapter upgrades the Airbnb-style application by introducing a **proper MVC architecture**, **controllers**, and **file-based data persistence**.  
It represents a more **real-world Express.js project structure** compared to previous chapters.

## 🚀 What’s New in Chapter 10?

- MVC-based folder structure (Models, Views, Controllers)
- Controllers to handle application logic
- File-based data storage using JSON
- Reusable EJS partials (header & head)
- Tailwind CSS for a modern, responsive UI
- Centralized 404 error handling
- Clean routing with Express Routers

## 🧠 Key Concepts Learned

- Separation of concerns (MVC pattern)
- Working with the filesystem (`fs` module)
- Dynamic rendering with EJS
- Passing data from controllers to views
- Using partials to avoid repetition
- Handling form submissions (POST requests)
- Serving static assets in Express

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Tailwind CSS**
- **File System (fs)**
- **HTML5 / CSS3**

## 📂 Project Structure

Chapter10/
│
├── controllers/
│ ├── homes.js
│ └── error.js
│
├── models/
│ └── home.js
│
├── routes/
│ ├── hostRoute.js
│ └── userRouter.js
│
├── views/
│ ├── partials/
│ │ ├── head.ejs
│ │ └── header.ejs
│ ├── home.ejs
│ ├── addhome.ejs
│ ├── homeAdded.ejs
│ └── 404.ejs
│
├── data/
│ └── homes.json
│
├── public/
│ └── output.css
│ └── home.css
│
├── utils/
│ └── PathUtils.js
│
├── app.js
└── README.md

## 📌 Notes

- Data is stored in a JSON file (no database yet)
- Designed for learning Express.js fundamentals
- This chapter improves and professionalizes Chapter 9
- Ideal preparation before moving to databases (MongoDB)
