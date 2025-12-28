// //code module
// const http = require("http");

//external module
const express = require("express");

//local module
const requirerequest = require("./user"); //.js comes default
const app = express();
//middleware apne order me run hoga
app.use("/", (req, res, next) => {
  console.log("came in first Middleware", req.url, req.method); //first middleware
  // res.send("hello from first"); //we cant send response from next middleware if we send response from first middleware bcz next will not be called ...here send resposne means end of response
  next();
});
app.use("/mom", (req, res, next) => {
  console.log("came in second Middleware", req.url, req.method);
  res.send("Welcome to the middleware understanding"); //response send krne ke baad next na lagai to yehi pe ruk jaega
});
// const server = http.createServer(app); //this app is also like requesthandler taking res,req...we can directly use app bcz express is creating server itself
const PORT = 3001;
app.listen(PORT, () => {
  //when server start listening we can know about
  console.log(`Server is running at http://localhost:${PORT}`);
});

// app.use('path',(req,res,next)=>{
//   })
