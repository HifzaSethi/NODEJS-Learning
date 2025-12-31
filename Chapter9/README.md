# Chapter 9: Express.js with EJS, Routing & Tailwind CSS

This chapter demonstrates a **full Express.js mini application** using **EJS as a templating engine**, **router-based architecture**, and **Tailwind CSS** for modern UI styling.  
The project simulates a simple **Airbnb-style home listing flow**.

## Key Features

- Express server with clean middleware flow
- EJS templating with reusable partials
- Router-based structure (`userRouter`, `hostRouter`)
- Dynamic data rendering using EJS
- Form handling using `POST` requests
- Tailwind CSS–styled UI
- Custom 404 error page
- In-memory data storage (no database)

## Concepts Covered

### 1. Express Configuration

- View engine setup using EJS
- Views directory configuration
- Static file serving (`public` folder)
- URL-encoded form data parsing

### 2. Router Architecture

- `userRouter` → handles homepage & home listings
- `hostRouter` → handles add-home form & submission
- Clean separation of concerns using routers

### 3. EJS Templating

- Dynamic rendering using `<%= %>`
- Looping through data with `forEach`
- Shared layouts using partials:
  - `head.ejs`
  - `header.ejs`

### 4. Form Handling

- Home registration form
- Capturing user input via `req.body`
- Passing submitted data to views
- Success confirmation page

### 5. Styling with Tailwind CSS

- Responsive UI
- Modern card layouts
- Hover effects & transitions
- Gradient backgrounds
- Custom 404 design

## Project Flow

1. User lands on home page
2. Views available home listings
3. Clicks **Add Home**
4. Submits home details
5. Receives success confirmation
6. Home appears in listing dynamically

## Folder Structure

├── app.js
├── routes
│ ├── hostRouter.js
│ └── userRouter.js
├── utils
│ └── PathUtils.js
├── views
│ ├── partials
│ │ ├── head.ejs
│ │ └── header.ejs
│ ├── home.ejs
│ ├── addhome.ejs
│ ├── homeAdded.ejs
│ └── 404.ejs
├── public
│ └── output.css
└── home.css
├── package.json
├── package-lock.json
├── README.md

## Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Add Home Page

![Add Home](./screenshots/HomeAdd.png)

### Success Page

![Success](./screenshots/HomeSuccess.png)

### HomeList page

![Home List](./screenshots/HomeList.png)
