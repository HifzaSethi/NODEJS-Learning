# Chpater3

This chapter contains multiple **Node.js practice projects** created to understand **core backend concepts**, **routing**, **request handling**, **data parsing**, and the **transition from pure Node.js to Express.js**.

# Projects Included

# Navigation Bar Project (Pure Node.js)

# Overview

This project demonstrates how to build a **dynamic navigation menu** using Node.js core modules without any framework.

# Features

- Dynamic navigation links generated from an array
- Manual routing using request URLs
- Each route displays its own page
- Back navigation without page reload frameworks

# Concepts Learned

- HTTP server creation using `http`
- URL-based routing
- Dynamic HTML generation
- Loop-based route matching
- Response handling and termination

# Calculator Project (Pure Node.js + Modular Design)

# Overview

A simple calculator application built using **pure Node.js**, focusing on **POST request handling**, **data parsing**, and **modular architecture**.

# Features

- Home page with calculator navigation
- Calculator form to input two numbers
- POST request to calculate sum
- Result page showing calculated output
- Custom 404 page handling

# Folder Structure

calculator/
├── app.js
├── handler.js
└── sum.js

# Concepts Learned

- Separation of concerns using modules
- Handling POST requests manually
- Reading request body using streams
- Parsing form data using buffers
- Routing without Express
- Clean handler-based architecture

# HTML Files Project (Express.js)

# Overview

This project marks the **transition from core Node.js to Express.js**, focusing on serving **HTML files**, **routing**, and **middleware usage**.

# Features

- Express server setup
- URL-encoded form data handling
- Modular route files
- Static HTML file serving
- Custom 404 error page

# Technologies Used

- Express.js
- body-parser middleware
- Nodemon for development

# Concepts Learned

- Express application structure
- Middleware usage
- Routing with Express Router
- Serving HTML files with `sendFile`
- Centralized 404 handling
- Project organization best practices

# Tech Stack

- Node.js
- Express.js
- JavaScript
- HTTP Core Module
- File System Module
- Nodemon

# Learning Purpose

These projects were created to:

- Understand how frameworks like Express work internally
- Gain confidence in backend fundamentals
- Learn routing, request handling, and data flow
- Practice clean folder and module structure
- Prepare for real-world backend applications
