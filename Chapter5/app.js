const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use((req, res, next) => {
  console.log("This is first Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("This is second Middleware", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("This is secnd Middleware", req.url, req.method);
//   res.send("<h1>This is third miidleware<h1>");
// });
app.get("/", (req, res) => {
  console.log("This is home page Middleware", req.url, req.method);
  res.send(`<h1>Welcome to the home page</h1>`);
});
app.get("/contact-us", (req, res) => {
  console.log("This is contact-us page Middleware", req.url, req.method);
  res.send(`<h1>Welcome to the contact us page</h1>
    <h3>Please give your details here..</h3>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your email" />
    <input type="submit"></input>
    </form>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log("Fisrt Handling on contact-us", req.url, req.method, req.body);
  next();
});
app.use(bodyparser.urlencoded()); //this one line is doing all work of collecting chunks form data and then pushing it to body..

app.post("/contact-us", (req, res, next) => {
  console.log(
    "This is contact-us page Middleware",
    req.url,
    req.method,
    req.body
  );
  res.send(`<h1>Thank you for contacting us</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
