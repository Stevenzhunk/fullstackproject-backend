const licenses = [
  {
    id: 1,
    name: 'STAR WARS & THE MANDALORIAN',
    description:
      'Disfruta de una saga que sigue agregando personajes a su colección',
    cover: '/img/star-wars/baby-yoda-1.webp',
    altCover: 'Bebe - Yoda',
  },
  {
    id: 2,
    name: 'PPOKEMON INDIGO',
    description:
      'Atrapa todos los que puedas y disfruta de una colección llena de amigos.',
    cover: '/img/pokemon/dragonite-1.webp',
    altCover: 'Dragonite',
  },
  {
    id: 3,
    name: 'HARRY POTTER',
    description: 'Revive los recuerdos de una saga llena de magia y encanto.',
    cover: './img/harry-potter/snape-patronus-1.webp',
    altCover: 'Snape Patronus',
  },
];


const model = require('../models/productModel');
const modelLicences = require('../models/license');
path = require('path');

const index = async (req, res) => {
  const userId = req.session.userId;
  try {
    const products = await model.findAll({
      include: modelLicences,
    });
    if (!userId) {
      res.render('index', {
        productos: products,
        licenses,
      });
    }
    res.render('index', {
      layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
      productos: products,
      licenses,
    });
  } catch (error) {
    console.log(error);
  }
};

const mainContact = (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.render('contact');
  }
  res.render('contact', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const mainAbout = (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.render('about');
  }
  res.render('about', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const mainFaqs = (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.render('faqs');
  }
  res.render('faqs', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

module.exports = {
  index,
  mainAbout,
  mainContact,
  mainFaqs,
};
