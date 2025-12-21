# Chapter 2: Request Handling, Routing & User Data Parsing in Node.js

## Overview

This chapter focuses on understanding how Node.js handles incoming HTTP requests, routes them correctly, processes user-submitted data, and stores that data using the file system. The chapter emphasizes modular backend design and low-level request handling without using any external frameworks.

## Concepts Covered

### Request & Response Lifecycle

- Learned how Node.js receives requests and sends responses using the core `http` module.
- Explored request properties such as URL, method, and headers.
- Understood how different routes are handled manually.

### Basic Routing

- Implemented route-based responses for different URLs.
- Handled multiple endpoints such as home routes and product routes.
- Displayed dynamic HTML responses based on the requested path.

### Handling GET and POST Requests

- Differentiated between GET and POST requests.
- Created HTML forms that submit data to the server.
- Handled form submissions using POST requests.

### Parsing Incoming User Data

- Learned how to read incoming request data in chunks.
- Used buffers to collect and reconstruct request bodies.
- Converted raw form data into usable JavaScript objects.
- Extracted user information such as name and gender from submitted data.

### Working with the File System (fs Module)

- Stored user-submitted data into text files.
- Saved structured data in JSON format.
- Understood synchronous file writing for learning purposes.

### Modular Code Structure

- Separated request-handling logic into a dedicated module.
- Imported custom modules into the main server file.
- Improved code readability and maintainability through modular design.

## Project Structure

chapter-2/
├── app.js
├── userparsing.js
├── information.js
├── routes.demo.js
├── user.txt
├── myFile.txt
└── README.md

## Key Learning Outcomes

By completing this chapter, I gained:

- A strong understanding of how Node.js handles HTTP requests internally
- Practical experience with routing without Express.js
- Confidence in parsing and processing user input
- Knowledge of storing data using Node.js file system
- Better understanding of modular backend architecture

## Why This Chapter Matters

This chapter builds a solid foundation for backend development by explaining how frameworks like Express.js work internally. Understanding these fundamentals makes it easier to use higher-level tools effectively in later chapters.
