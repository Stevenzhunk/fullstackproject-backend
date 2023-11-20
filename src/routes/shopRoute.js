const express = require("express");

const shopRouter = express.Router();

const controller = require("../controllers/shopController.js");

shopRouter.get("/", controller.shopHome);

shopRouter.get("/item/:id", controller.shopItem);

shopRouter.post("/item/:id/add", controller.addItem);

shopRouter.get("/cart", controller.cartHome);

shopRouter.post("/cart", controller.cartPost);

module.exports = shopRouter;
