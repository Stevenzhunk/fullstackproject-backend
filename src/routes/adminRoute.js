const express = require("express");

//routes Obj
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("<h1>Soy el panel Admin</h1>");
});

adminRouter.get("/create", (req, res) => {
  res.send("<h1>Soy la Creacion del Admin</h1>");
});

adminRouter.post("/create", (req, res) => {
  res.send("<h1>Soy el post de la Creacion del Admin</h1>");
});

adminRouter.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el Item Nro : ${id} del Admin</h1>`);
});

adminRouter.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy la Actualizacion Nro : ${id} del Admin</h1>`);
});

adminRouter.delete("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el Item Nro : ${id} Borrado por el Admin</h1>`);
});

module.exports = adminRouter;
