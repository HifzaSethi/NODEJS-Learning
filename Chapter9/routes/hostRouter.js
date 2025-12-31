const Path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/PathUtils");
hostRouter.get("/add-home", (req, res, next) => {
  res.render("addhome", { pageTitle: "Add Home" });
});
const registerHome = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home added succesfully for :", req.body.homeName); //req.body will contain the parsed data from the form
  registerHome.push(req.body);
  res.render("homeAdded", { pageTitle: "Succesfull" });
});
exports.hostRouter = hostRouter;
exports.registerHome = registerHome;
