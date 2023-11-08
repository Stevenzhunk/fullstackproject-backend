import express from 'express';

const shopRoute = express.Router();

shopRoute.get('/', (req, res) => {
  res.send('<h1>Soy la pagina Shop</h1>');
});

shopRoute.get('/item/:id', (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} <h1>`);
});

shopRoute.post('/item/:id/add', (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiendice al carrito <h1>`);
});

shopRoute.get('/cart', (req, res) => {
  res.send('<h1>Soy el carrito de compras</h1>');
});

shopRoute.post('/cart', (req, res) => {
  res.send('<h1>Soy el post del carrito de compras</h1>');
});

export default shopRoute;
