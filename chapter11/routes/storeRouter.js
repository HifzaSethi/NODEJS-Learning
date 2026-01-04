const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getindex);
storeRouter.get("/booking", storeController.getbooking);
storeRouter.get("/fvrt-list", storeController.getfvrtlist);
storeRouter.get("/home-list", storeController.gethome);
storeRouter.get("/reserved", storeController.getreserved);

module.exports = storeRouter;
