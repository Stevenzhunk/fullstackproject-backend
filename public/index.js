const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navOn = document.getElementById('nav-active');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileMenu.classList.toggle('menu-open'); // Agrega o quita la clase menu-open
  navOn.classList.toggle('navfull');
});

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
// script shop:


//script botones item:

if (document.getElementById('cantidad_item')) {
  const cantidad_item = document.getElementById('cantidad_item');

  const aumentar_cantidad_item = document.getElementById('boton_aumentar_item');

  const disminuir_cantidad_item = document.getElementById(
    'boton_disminuir_item'
  );

  aumentar_cantidad_item.addEventListener('click', () => {
    let q = parseInt(cantidad_item.textContent);
    q++;
    cantidad_item.textContent = String(q);
  });

  disminuir_cantidad_item.addEventListener('click', () => {
    let q = parseInt(cantidad_item.textContent);
    if (q == 0) {
      cantidad_item.textContent = String(q);
    } else {
      q--;
      cantidad_item.textContent = String(q);
    }
  });
} else {
  console.log('elemento no existe en pagina');
}

//script botones babyyoda y pidgeotto cart:

if (document.getElementById('cantidad_babyyoda_cart')) {
  const cantidad_babyyoda_cart = document.getElementById(
    'cantidad_babyyoda_cart'
  );

  const aumentar_cantidad_babyyoda_cart = document.getElementById(
    'boton_aumentar_babyyoda_cart'
  );

  const disminuir_cantidad_babyyoda_cart = document.getElementById(
    'boton_disminuir_babyyoda_cart'
  );

  aumentar_cantidad_babyyoda_cart.addEventListener('click', () => {
    let q = parseInt(cantidad_babyyoda_cart.textContent);
    q++;
    cantidad_babyyoda_cart.textContent = String(q);
  });

  disminuir_cantidad_babyyoda_cart.addEventListener('click', () => {
    let q = parseInt(cantidad_babyyoda_cart.textContent);
    if (q == 0) {
      cantidad_babyyoda_cart.textContent = String(q);
    } else {
      q--;
      cantidad_babyyoda_cart.textContent = String(q);
    }
  });

  const cantidad_pidgeotto_cart = document.getElementById(
    'cantidad_pidgeotto_cart'
  );

  const aumentar_cantidad_pidgeotto_cart = document.getElementById(
    'boton_aumentar_pidgeotto_cart'
  );

  const disminuir_cantidad_pidgeotto_cart = document.getElementById(
    'boton_disminuir_pidgeotto_cart'
  );

  aumentar_cantidad_pidgeotto_cart.addEventListener('click', () => {
    let q = parseInt(cantidad_pidgeotto_cart.textContent);
    q++;
    cantidad_pidgeotto_cart.textContent = String(q);
  });

  disminuir_cantidad_pidgeotto_cart.addEventListener('click', () => {
    let q = parseInt(cantidad_pidgeotto_cart.textContent);
    if (q == 0) {
      cantidad_pidgeotto_cart.textContent = String(q);
    } else {
      q--;
      cantidad_pidgeotto_cart.textContent = String(q);
    }
  });
} else {
  console.log('elemento no existe en pagina');
}

/*ocultar y mostrar menu desplegable*/
document.addEventListener('DOMContentLoaded', function () {
  const shopMenu = document.getElementById('shop-menu');
  const shopSubmenu = document.getElementById('shop-submenu');

  if (shopMenu && shopSubmenu) {
    shopMenu.addEventListener('click', function (event) {
      event.preventDefault();
      shopSubmenu.classList.toggle('show');
    });

    shopSubmenu.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }
});
