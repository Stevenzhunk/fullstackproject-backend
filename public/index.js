const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navOn = document.getElementById("nav-active");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("menu-open"); // Agrega o quita la clase menu-open
  navOn.classList.toggle("navfull");
});

//script botones item:

if (document.getElementById("cantidad_item")) {
  const cantidad_item = document.getElementById("cantidad_item");

  const aumentar_cantidad_item = document.getElementById("boton_aumentar_item");

  const disminuir_cantidad_item = document.getElementById(
    "boton_disminuir_item"
  );

  aumentar_cantidad_item.addEventListener("click", () => {
    let q = parseInt(cantidad_item.textContent);
    q++;
    cantidad_item.textContent = String(q);
  });

  disminuir_cantidad_item.addEventListener("click", () => {
    let q = parseInt(cantidad_item.textContent);
    if (q == 0) {
      cantidad_item.textContent = String(q);
    } else {
      q--;
      cantidad_item.textContent = String(q);
    }
  });
} else {
  console.log("elemento no existe en pagina");
}

//script botones cart:

for (let id = 1; id <= 13; id++) {
  if (document.getElementById(`cantidad_cart_${id}`)) {
    document
      .getElementById(`boton_aumentar_cart_${id}`)
      .addEventListener("click", () => {
        const cantidad_cart = document.getElementById(`cantidad_cart_${id}`);
        const precio_cart = document.getElementById(`precio_cart_${id}`);
        const monto_cart = document.getElementById(`monto_cart_${id}`);

        let q = parseInt(cantidad_cart.textContent);
        let p = parseFloat(precio_cart.textContent);
        let m = parseFloat(monto_cart.textContent);
        q++;
        m = p * q;
        cantidad_cart.textContent = String(q);
        monto_cart.textContent = String(m);
      });

    document
      .getElementById(`boton_disminuir_cart_${id}`)
      .addEventListener("click", () => {
        const cantidad_cart = document.getElementById(`cantidad_cart_${id}`);
        const precio_cart = document.getElementById(`precio_cart_${id}`);
        const monto_cart = document.getElementById(`monto_cart_${id}`);

        let q = parseInt(cantidad_cart.textContent);
        let p = parseFloat(precio_cart.textContent);
        let m = parseFloat(monto_cart.textContent);
        if (q == 0) {
          cantidad_cart.textContent = String(q);
          m = p * q;
          monto_cart.textContent = String(m);
        } else {
          q--;
          m = p * q;
          cantidad_cart.textContent = String(q);
          monto_cart.textContent = String(m);
        }
      });
  }
}

//script resumen cart:

/*ocultar y mostrar menu desplegable*/
document.addEventListener("DOMContentLoaded", function () {
  const shopMenu = document.getElementById("shop-menu");
  const shopSubmenu = document.getElementById("shop-submenu");

  if (shopMenu && shopSubmenu) {
    shopMenu.addEventListener("click", function (event) {
      event.preventDefault();
      shopSubmenu.classList.toggle("show");
    });

    shopSubmenu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
});
