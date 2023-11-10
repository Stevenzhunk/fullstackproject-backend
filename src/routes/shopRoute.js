const express = require("express");

const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
  res.send("<h1>Soy la pagina Shop!!!</h1>");
});

shopRouter.get("/item/:id", (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} <h1>`);
});

shopRouter.post("/item/:id/add", (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiéndose al carrito <h1>`);
});

shopRouter.get("/cart", (req, res) => {
  res.send("<h1>Soy el carrito de compras</h1>");
});

shopRouter.post("/cart", (req, res) => {
  res.send("<h1>Soy el post del carrito de compras</h1>");
});

module.exports = shopRouter;
