const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controllers/hostController");
hostRouter.get("/add-home", hostController.getaddHome);
hostRouter.post("/add-home", hostController.postaddHome);
hostRouter.get("/host-home-list", hostController.gethosthome);
exports.hostRouter = hostRouter;
