const Path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/PathUtils");
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(Path.join(rootDir, "views", "addhome.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body); //req.body will contain the parsed data from the form
  res.sendFile(Path.join(rootDir, "views", "homeAdded.html"));
});
module.exports = hostRouter;
