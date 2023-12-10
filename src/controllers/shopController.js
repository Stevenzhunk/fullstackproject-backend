// nota Fran: en el const productos tuve que sacarle el signo $ a los precios
// y cambiar coma por punto
// para poder manipularlos en el carrrito,
// aviso para que revisen cómo les impacta en otras vistas

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

const path = require('path');
const shopHome = (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.render('shop', {
      productos,
    });
  }
  res.render('shop', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
    productos,
  });
};

const shopItem = (req, res) => {
  const { id } = req.params;

  const userId = req.session.userId;
  if (!userId) {
    res.render('item', {
      itemId: id,
      productos,
    });
  }
  res.render('item', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
    itemId: id,
    productos,
  });
};

const addItem = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiéndose al carrito <h1>`);
};

const cartHome = (req, res) => {
  const userId = req.session.userId;
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
