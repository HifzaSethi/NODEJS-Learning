//core module
const path = require("path");
//local modeule
const rootDir = require("../utils/PathUtils");
//external module
const express = require("express");
const homeRouter = express.Router();
homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = homeRouter;
