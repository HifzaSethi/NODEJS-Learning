# Chapter 8: Express Routing, Middleware & MVC Basics

This chapter focuses on building a structured **Express.js application** using middleware, routers, and static HTML views. It introduces clean project organization and real-world request handling patterns.

## What I Learned in This Chapter

### 1. Express Middleware Flow

- How middleware executes **in sequence**
- Using `next()` to pass control to the next middleware
- Logging request method and URL for debugging
- Understanding how unmatched routes fall through to a **404 handler**

### 2. Parsing Form Data

- Using `express.urlencoded()` to parse form submissions
- Accessing submitted data via `req.body`
- Handling `POST` requests from HTML forms

### 3. Router-Based Architecture

- Splitting routes into **separate router files**
- Using:
  - `userRouter` for user-facing routes
  - `hostRouter` for host-specific routes
- Mounting routers using:
  ```js
  app.use("/");
  app.use("/host");
  ```

### 4. Serving HTML Files

- Sending static HTML files using `res.sendFile()`
- Constructing absolute paths using Node’s `path` module
- Creating reusable **root directory helper** using:

  ```js
  require.main.filename;
  ```

---

### 5. Handling 404 Errors

- Creating a custom **404 page**
- Returning correct HTTP status codes using:

  ```js
  res.status(404);
  ```

- Ensuring invalid routes are handled gracefully

### 6. Simple Airbnb-Style Flow (Mini Project)

- Home page with navigation
- Form to add home details
- Handling form submission
- Confirmation page after successful submission

This mini flow helped me understand **end-to-end request handling** in Express.

## Key Concepts Covered

- Express middleware
- GET & POST routing
- Form handling
- Router modularization
- MVC-style separation
- Custom 404 error handling
- Clean project structure
