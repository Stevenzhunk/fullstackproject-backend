
const productos = [
  {
    id: 1,
    class: 'STAR WARS',
    title: 'STORMTROOPER LIGHTSABER',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/star-wars/trooper-box.webp',
    imageFront: '/img/star-wars/trooper-1.webp',
    altBack: 'BABY YODA BLUEBALL',
    altFront: 'BABY YODA BLUEBALL',
    barcode: 'STW0010001',
  },
  {
    id: 2,
    class: 'POKEMON',
    title: 'PIDGEOTTO',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/pokemon/pidgeotto-box.webp',
    imageFront: '/img/pokemon/pidgeotto-1.webp',
    altBack: 'PIDGEOTTO',
    altFront: 'PIDGEOTTO',
    barcode: 'STW0010002',
  },
  {
    id: 3,
    class: 'HARRY POTTER',
    title: 'LUNA LOVEGOOD LION MASK',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/harry-potter/luna-box.webp',
    imageFront: '/img/harry-potter/luna-1.webp',
    altBack: 'HARRY POTTER',
    altFront: 'HARRY POTTER',
    barcode: 'STW0010003',
  },
  {
    id: 4,
    class: 'STAR WARS',
    title: 'BABY YODA',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/star-wars/baby-yoda-box.webp',
    imageFront: '/img/star-wars/baby-yoda-1.webp',
    altBack: 'BABY YODA BOX',
    altFront: 'FUNKO BABY YODA',
    barcode: 'STW0010004',
  },
  {
    id: 5,
    class: 'POKEMON',
    title: 'CHARMANDER',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/pokemon/charmander-box.webp',
    imageFront: '/img/pokemon/charmander-1.webp',
    altBack: 'CHARMANDER BOX',
    altFront: 'FUNKO CHARMANDER',
    barcode: 'STW0010005',
  },
  {
    id: 6,
    class: 'HARRY POTTER',
    title: 'HARRY POTTER',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/harry-potter/harry-box.webp',
    imageFront: '/img/harry-potter/harry-1.webp',
    altBack: 'HARRY POTTER',
    altFront: 'HARRY POTTER',
    barcode: 'STW0010006',
  },
  {
    id: 7,
    class: 'STAR WARS',
    title: 'BOBBA FETH',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/star-wars/bobbafeth-box.webp',
    imageFront: '/img/star-wars/bobbafeth-1.webp',
    altBack: 'BOBBA FETH BOX',
    altFront: 'FUNKO BOBBA FETH',
    barcode: 'STW0010007',
  },
  {
    id: 8,
    class: 'POKEMON',
    title: 'DRAGONITE',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/pokemon/dragonite-box.webp',
    imageFront: '/img/pokemon/dragonite-1.webp',
    altBack: 'DRAGONITE BOX',
    altFront: 'FUNKO DRAGONITE',
    barcode: 'STW0010008',
  },
  {
    id: 9,
    class: 'HARRY POTTER',
    title: 'HERMIONE',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/harry-potter/hermione-box.webp',
    imageFront: '/img/harry-potter/hermione-1.webp',
    altBack: 'HERMIONE BOX',
    altFront: 'FUNKO HERMIONE',
    barcode: 'STW0010009',
  },
  {
    id: 10,
    class: 'HARRY POTTER',
    title: 'SNAPE PATRONUS',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/harry-potter/snape-patronus-box.webp',
    imageFront: '/img/harry-potter/snape-patronus-1.webp',
    altBack: 'SNAPE PATRONUS BOX',
    altFront: 'FUNKO SNAPE PATRONUS',
    barcode: 'STW0010010',
  },
  {
    id: 11,
    class: 'POKEMON',
    title: 'PIKACHU',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/pokemon/pikachu-box.webp',
    imageFront: '/img/pokemon/pikachu-1.webp',
    altBack: 'PIKACHU BOX',
    altFront: 'FUNKO PIKACHU',
    barcode: 'STW0010011',
  },
  {
    id: 12,
    class: 'POKEMON',
    title: 'VULPIX',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/pokemon/vulpix-box.webp',
    imageFront: '/img/pokemon/vulpix-1.webp',
    altBack: 'VULPIX BOX',
    altFront: 'FUNKO VULPIX',
    barcode: 'STW0010011',
  },
  {
    id: 13,
    class: 'STAR WARS',
    title: 'LUKE',
    price: '$ 1799,99',
    paymethod: '3 CUOTAS SIN INTERÉS',
    imageBack: '/img/star-wars/luke-box.webp',
    imageFront: '/img/star-wars/luke-1.webp',
    altBack: 'LUKE BOX',
    altFront: 'FUNKO LUKE',
    barcode: 'STW0010013',
  },
];

const path = require('path');
const shopHome = (req, res) => {
  res.render('shop',{    
    layout: path.join(__dirname, '../views/layouts/layout.ejs'),
    productos,
  });  
};

const shopItem = (req, res) => {
  const { id } = req.params;
  const productos = [
    {
      id: 1,
      class: 'STAR WARS',
      title: 'STORMTROOPER LIGHTSABER',
      price: '$ 1799,99',
      paymethod: '3 CUOTAS SIN INTERÉS',
      imageBack: '/img/star-wars/trooper-box.webp',
      imageFront: '/img/star-wars/trooper-1.webp',
      altBack: 'BABY YODA BLUEBALL',
      altFront: 'BABY YODA BLUEBALL',
    },
    {
      id: 1,
      class: 'POKEMON',
      title: 'PIDGEOTTO',
      price: '$ 1799,99',
      paymethod: '3 CUOTAS SIN INTERÉS',
      imageBack: '/img/pokemon/pidgeotto-box.webp',
      imageFront: '/img/pokemon/pidgeotto-1.webp',
      altBack: 'PIDGEOTTO',
      altFront: 'PIDGEOTTO',
    },
    {
      id: 1,
      class: 'HARRY POTTER',
      title: 'LUNA LOVEGOOD LION MASK',
      price: '$ 1799,99',
      paymethod: '3 CUOTAS SIN INTERÉS',
      imageBack: '/img/harry-potter/luna-box.webp',
      imageFront: '/img/harry-potter/luna-1.webp',
      altBack: 'HARRY POTTER',
      altFront: 'HARRY POTTER',
    },
  ];
  res.render('item', { itemId: id, productos });
  console.log(`<h1>Soy el item de shop Nro : ${id} <h1>`);
};

const addItem = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el item de shop Nro : ${id} añadiéndose al carrito <h1>`);
};

const cartHome = (req, res) => {
  res.render('cart');
};

const cartPost = (req, res) => {
  res.send('<h1>Soy el post del carrito de compras</h1>');
};

module.exports = { shopHome, shopItem, addItem, cartHome, cartPost };
