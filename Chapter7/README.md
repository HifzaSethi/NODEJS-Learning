# Chapter 7: Express Middleware and Request Handling

# Overview

This project demonstrates the fundamentals of **Express.js**, including middleware execution order, route handling, and processing form data using local and external modules.

## Project Structure

chapter7-express/
│
├─ app.js # Main Express server demonstrating middleware order
├─ appnext.js # Alternative Express server showing GET and POST route handling
├─ user.js # Local module to handle requests and form data

## Features

- **Middleware Understanding**

  - Demonstrates the sequential execution of multiple middleware functions using `app.use()`.
  - Highlights how `next()` controls flow between middleware.
  - Shows the effect of sending responses inside middleware.

- **Route Handling**

  - Supports `GET` and `POST` routes.
  - Demonstrates how route-specific middleware is different from `app.use()`.

- **Form Data Handling**

  - Collects user input from an HTML form.
  - Parses POST request data using native Node.js methods (`req.on("data")` and `req.on("end")`).
  - Writes form data to a local file (`myFile.txt`) in JSON format.

- **Modular Code**
  - Uses a local module (`user.js`) to separate request handling logic from the main server file.

## Key Concepts Learned

- **Middleware Execution Order:** Middleware runs in the order it is defined. Sending a response in middleware stops further execution unless `next()` is called.
- **Route Matching:** `app.use()` matches all requests starting with the specified path, while `app.get()` and `app.post()` match specific HTTP methods.
- **Request Data Handling:** POST request bodies can be collected using event listeners on `req` without external libraries.
- **Modularity:** Separating request handling logic into local modules improves code readability and maintainability.
