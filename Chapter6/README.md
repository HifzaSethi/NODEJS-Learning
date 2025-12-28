# Chapter 6: Blocking vs Non-Blocking Operations & Event Loop in Node.js

## Overview
This chapter focuses on understanding **how Node.js executes code**, specifically the difference between **blocking (synchronous)** and **non-blocking (asynchronous)** operations, and how the **Event Loop** manages task execution.


## Key Concepts Learned
###  Blocking vs Non-Blocking Code
* Compared synchronous file reading with asynchronous file reading.
* Observed how blocking operations pause execution until completion.
* Understood how non-blocking operations allow the program to continue running.

###  Node.js Event Loop
* Learned how Node.js schedules tasks using the Event Loop.
* Observed execution order through logging statements.
* Understood why Node.js can handle asynchronous operations efficiently.

### Task Queues & Execution Order
* **Microtask Queue** (Promises)
* **Timer Queue** (`setTimeout`)
* **I/O Queue** (file system callbacks)
* **Check Queue** (`setImmediate`)
* **Close Callbacks**

Learned how these queues are prioritized and executed.



## What This Chapter Demonstrates
* Execution order of synchronous vs asynchronous code
* Behavior of Promises vs timers
* Handling of file system I/O callbacks
* How Node.js exits after completing all pending tasks


## Learning Outcome
By completing this chapter, I gained a clear understanding of:
* Why Node.js is non-blocking by design
* How the Event Loop processes different types of tasks
* The internal scheduling mechanism behind asynchronous code
* Writing efficient backend code without blocking execution



## Why This Chapter Is Important
Understanding the Event Loop is critical for:
* Writing high-performance Node.js applications
* Avoiding performance bottlenecks
* Debugging asynchronous behavior
* Building scalable backend systems

## Technologies Used
* Node.js
* File System (`fs`) module
* Promises
* Timers & Event Loop APIs

