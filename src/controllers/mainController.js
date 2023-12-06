const categories = [
  {
    id: 1,
    name: "Star Wars & The Mandalorian",
    description:
      "Disfruta de una saga que sigue agregando personajes a su colección",
    cover: "/img/star-wars/baby-yoda-1.webp",
    altCover: "Bebe - Yoda",
  },
  {
    id: 2,
    name: "Pokemon Indigo",
    description:
      "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    cover: "/img/pokemon/vulpix-1.webp",
    altCover: "Vulpix",
  },
  {
    id: 3,
    name: "Harry Poter",
    description: "Revive los recuerdos de una saga llena de magia y encanto.",
    cover: "./img/harry-potter/snape-patronus-1.webp",
    altCover: "Snape Patronus",
  },
];
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
    id: 2,
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
    id: 3,
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

const index = (req, res) => {
  res.render("index", {categories, productos  });
};

const mainContact = (req, res) => {
  res.render("contact");
};

const mainAbout = (req, res) => {
  res.render("about");
};

const mainFaqs = (req, res) => {
  res.render("faqs");
};

module.exports = {
  index,
  mainAbout,
  mainContact,
  mainFaqs,
};
