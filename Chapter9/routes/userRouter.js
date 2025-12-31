//core module
const path = require("path");
//local modeule

//external module
const express = require("express");
const { registerHome } = require("./hostRouter");
const userRouter = express.Router();
userRouter.get("/", (req, res, next) => {
  console.log(registerHome);
  res.render("home", { registerHome: registerHome, pageTitle: "Airbnb Home" });
});
module.exports = userRouter;
