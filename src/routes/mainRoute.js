const express = require("express");

const mainRouter = express.Router();

const controller = require("../controllers/mainController")

mainRouter.get("/home", controller.index );

mainRouter.get("/contact", controller.mainContact );

mainRouter.get("/about", controller.mainAbout );

mainRouter.get("/faqs", controller.mainFaqs );

module.exports = mainRouter;
