const model = require('../models/productModel');
const modelLicences = require('../models/license');

const path = require('path');
const shopHome = async (req, res) => {
  const userId = req.session.userId;
  try {
    const products = await model.findAll({
      include: modelLicences,
    });
    if (products) {
      if (!userId) {
        res.render('shop', {
          productos: products,
        });
      }
      res.render('shop', {
        layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
        productos: products,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const shopItem = async (req, res) => {
 
  const userId = req.session.userId;
  try {
    const product = await model.findByPk(req.params.id, {
      include: modelLicences,
    });
  
    const products = await model.findAll({
      include: modelLicences,
    });

    if (products) {
      if (!userId) {
        res.render('item', {
          producto: product,
          productos: products,
          itemId: req.params.id,
        });
      }
      res.render('item', {
        layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
        producto: product,
        productos: products,
        itemId: req.params.id,
      });
    } else {
      res.status(404).send('El producto no existe');
    }
  } catch (error) {
    console.log(error);
  }
};

const addItem = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiéndose al carrito <h1>`);
};

const cartHome = async (req, res) => {
  const userId = req.session.userId;
  const productos = await model.findAll({
    include: modelLicences,
  });

  if (!userId) {
    res.render('cart', {
      productos,
    });
  }
  res.render('cart', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
    productos,
  });
};

const cartPost = (req, res) => {
  res.send('<h1>Soy el post del carrito de compras</h1>');
};

module.exports = { shopHome, shopItem, addItem, cartHome, cartPost };
