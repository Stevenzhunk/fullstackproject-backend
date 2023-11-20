const express = require("express");

const mainRouter = express.Router();

const controller = require("../controllers/mainController")

mainRouter.get("/home", controller.index );

mainRouter.get("/contact", (req, res) => {
  res.send("<h1>Pagina Contacto</h1>");
});

mainRouter.get("/about", (req, res) => {
  res.send("<h1>Pagina Acerca de Nosotros</h1>");
});

mainRouter.get("/faqs", (req, res) => {
  res.send("<h1>Pagina Faqs</h1>");
});

module.exports = mainRouter;
