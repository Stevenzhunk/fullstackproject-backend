const shopHome = (req, res) => {
  res.send('<h1>Soy la pagina Shop!!!</h1>');
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
