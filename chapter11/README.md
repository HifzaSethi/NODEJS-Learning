# Practice

# 🏡 Airbnb Clone More Features– Chapter 11

### MVC Architecture with Express & EJS

A feature-rich **Airbnb-style web application** built using **Node.js, Express.js, and EJS**, focused on implementing a **real-world MVC (Model–View–Controller) architecture** with **file-based data persistence**.

This chapter represents a major step forward from basic Express applications to **well-structured, scalable backend development**.

## 🚀 Features

- Proper **MVC Architecture** (Models, Views, Controllers)
- Clean and modular **Express Routers**
- **Controllers** for business logic separation
- **EJS templating** with reusable partials
- **File-based data persistence** using JSON (`fs` module)
- **Dynamic home listings** for users and hosts
- **Form handling** with POST requests
- **Centralized 404 error handling**
- **Tailwind CSS** for modern & responsive UI
- Scalable project structure (industry-style)

## 🧠 What I Learned

Through this project, I learned how to:

- Implement **MVC architecture** in Express.js
- Separate **routes, controllers, and models**
- Persist data using the **Node.js File System (fs)**
- Pass dynamic data from controllers to EJS views
- Create **reusable UI components** using EJS partials
- Handle form submissions securely
- Structure Express applications like **real-world backend projects**
- Build clean, readable, and maintainable codebases

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Tailwind CSS**
- **File System (fs)**
- **HTML5 / CSS3**

*

## 📂 Project Structure

├── controllers
│ ├── hostController.js
│ ├── storeController.js
│ └── error.js
│
├── models
│ └── home.js
│
├── routes
│ ├── hostRouter.js
│ └── storeRouter.js
│
├── views
│ ├── host
│ ├── store
│ ├── partials
│ └── 404.ejs
│
├── data
│ └── homes.json
│
├── public
│ └── css
│
├── utils
│ └── PathUtils.js
│
├── app.js
├── package.json
├── package-lock.json
└── nodemon.json

## 🌟 Project Highlights

- 🏠 Hosts can **add homes** using a form
- 💾 Homes are stored **persistently** in a JSON file
- 📃 Separate listings for **users and hosts**
- 🎨 Clean, modern UI built with **Tailwind CSS**
- 🧩 Modular and scalable backend design
- ⚠️ Graceful handling of **404 errors**
