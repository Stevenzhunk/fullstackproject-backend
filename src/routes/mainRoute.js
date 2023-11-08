import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/home', (req, res) => {
  res.send('<h1>Pagina Home</h1>');
});

mainRouter.get('/contact', (req, res) => {
  res.send('<h1>Pagina Contacto</h1>');
});

mainRouter.get('/about', (req, res) => {
  res.send('<h1>Pagina Acerca de Nosotros</h1>');
});

mainRouter.get('/faqs', (req, res) => {
  res.send('<h1>Pagina Faqs</h1>');
});

export default mainRouter;
