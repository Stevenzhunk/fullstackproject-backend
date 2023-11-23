const shopHome = (req, res) => {
  res.send("<h1>Soy la pagina Shop!!!</h1>");
};

const shopItem = (req, res) => {
  const { id } = req.params;
  res.render("item", { itemId: id });
  console.log(`<h1>Soy el item de shop Nro : ${id} <h1>`);
};

const addItem = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiéndose al carrito <h1>`);
};

const cartHome = (req, res) => {
  res.render("cart");
};

const cartPost = (req, res) => {
  res.send("<h1>Soy el post del carrito de compras</h1>");
};

module.exports = { shopHome, shopItem, addItem, cartHome, cartPost };
