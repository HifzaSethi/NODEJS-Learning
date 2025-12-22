//core module
const path = require("path");
//local modeule
const rootDir = require("../utils/PathUtils");
//external module
const express = require("express");
const Routercontact = express.Router();
Routercontact.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
Routercontact.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "thankyou.html"));
});

module.exports = Routercontact;
