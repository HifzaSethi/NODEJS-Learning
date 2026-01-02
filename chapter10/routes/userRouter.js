//core module
const path = require("path");
//local modeule

//external module
const express = require("express");

const userRouter = express.Router();
const homesController = require("../controllers/homes");
userRouter.get("/", homesController.gethome);
module.exports = userRouter;
