//external module
const express = require("express");

//local module
const requirerequest = require("./user"); //.js comes default
const app = express();

app.get("/", (req, res, next) => {
  console.log("came in first Middleware", req.url, req.method); //first middleware
  next();
});
app.post("/mom", (req, res, next) => {
  console.log("came in second Middleware", req.url, req.method);
  res.send("<h1>Welcome to the middleware understanding MOM<h1>");
}); //ye full skip hoga bcz hm to koi form submit nhi kr rhe req get type ki he but mention post he
app.use("/", (req, res, next) => {
  console.log("came in anothr Middleware", req.url, req.method); //first middleware
  res.send("Came from another middleware");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
//when we use app.use then path is open like starting path jiska bhi / hoga match  ut when we use get and post then it will only match the path which is mentioned in the get and post method
