const licenses = [
  {
    id: 1,
    name: 'Star Wars & The Mandalorian',
    description:
      'Disfruta de una saga que sigue agregando personajes a su colección',
    cover: '/img/star-wars/baby-yoda-1.webp',
    altCover: 'Bebe - Yoda',
  },
  {
    id: 2,
    name: 'Pokemon Indigo',
    description:
      'Atrapa todos los que puedas y disfruta de una colección llena de amigos.',
    cover: '/img/pokemon/vulpix-1.webp',
    altCover: 'Vulpix',
  },
  {
    id: 3,
    name: 'Harry Poter',
    description: 'Revive los recuerdos de una saga llena de magia y encanto.',
    cover: './img/harry-potter/snape-patronus-1.webp',
    altCover: 'Snape Patronus',
  },
];

const productos = [
  {
    id: 1,
    license_id: 'STAR WARS',
    product_name: 'STORMTROOPER LIGHTSABER',
    price: '1699.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/star-wars/trooper-box.webp',
    image_front: '/img/star-wars/trooper-1.webp',
    sku: 'STW0010001',
    product_description:
      'Figura coleccionable de un stormtrooper con un sable de luz jedi',
    stock: '3',
    discount: '10',
    category_id: '0',
  },
  {
    id: 2,
    license_id: 'POKEMON',
    product_name: 'PIDGEOTTO',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/pokemon/pidgeotto-box.webp',
    image_front: '/img/pokemon/pidgeotto-1.webp',
    sku: 'STW0010002',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 3,
    license_id: 'HARRY POTTER',
    product_name: 'LUNA LOVEGOOD LION MASK',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/harry-potter/luna-box.webp',
    image_front: '/img/harry-potter/luna-1.webp',
    sku: 'STW0010003',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 4,
    license_id: 'STAR WARS',
    product_name: 'BABY YODA',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/star-wars/baby-yoda-box.webp',
    image_front: '/img/star-wars/baby-yoda-1.webp',
    sku: 'STW0010004',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 5,
    license_id: 'POKEMON',
    product_name: 'CHARMANDER',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/pokemon/charmander-box.webp',
    image_front: '/img/pokemon/charmander-1.webp',
    sku: 'STW0010005',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 6,
    license_id: 'HARRY POTTER',
    product_name: 'HARRY POTTER',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/harry-potter/harry-box.webp',
    image_front: '/img/harry-potter/harry-1.webp',
    sku: 'STW0010006',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 7,
    license_id: 'STAR WARS',
    product_name: 'BOBBA FETH',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/star-wars/bobbafeth-box.webp',
    image_front: '/img/star-wars/bobbafeth-1.webp',
    sku: 'STW0010007',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 8,
    license_id: 'POKEMON',
    product_name: 'DRAGONITE',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/pokemon/dragonite-box.webp',
    image_front: '/img/pokemon/dragonite-1.webp',
    sku: 'STW0010008',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 9,
    license_id: 'HARRY POTTER',
    product_name: 'HERMIONE',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/harry-potter/hermione-box.webp',
    image_front: '/img/harry-potter/hermione-1.webp',
    sku: 'STW0010009',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 10,
    license_id: 'HARRY POTTER',
    product_name: 'SNAPE PATRONUS',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/harry-potter/snape-patronus-box.webp',
    image_front: '/img/harry-potter/snape-patronus-1.webp',
    sku: 'STW0010010',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 11,
    license_id: 'POKEMON',
    product_name: 'PIKACHU',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/pokemon/pikachu-box.webp',
    image_front: '/img/pokemon/pikachu-1.webp',
    sku: 'STW0010011',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 12,
    license_id: 'POKEMON',
    product_name: 'VULPIX',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/pokemon/vulpix-box.webp',
    image_front: '/img/pokemon/vulpix-1.webp',
    sku: 'STW0010011',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
  {
    id: 13,
    license_id: 'STAR WARS',
    product_name: 'LUKE',
    price: '1799.99',
    dues: '3 CUOTAS SIN INTERÉS',
    image_back: '/img/star-wars/luke-box.webp',
    image_front: '/img/star-wars/luke-1.webp',
    sku: 'STW0010013',
    product_description: '',
    stock: '3',
    discount: '10',
    categoryId: '0',
  },
];

path = require('path');

const index = (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.render('index', {
      productos,
      licenses,
    });
  }
  res.render('index', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
    productos,
    licenses,
  });
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
