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

/* SCRIPTS CART */

//script nro de items y montos iniciales en carrito:

const cantidades_cart_nodelist = Array.from(
  document.querySelectorAll(".quantity__number")
);
const cantidades_cart_array = cantidades_cart_nodelist.map((cantidad) => {
  return cantidad.textContent;
});
let cantidad_items_cart = cantidades_cart_array.length;

const montos_cart_nodelist = Array.from(
  document.querySelectorAll(".quantity__amount")
);
const montos_cart_array = montos_cart_nodelist.map((monto) => {
  return monto.textContent;
});

console.log(montos_cart_array);

/*script resumen cart: */

//cantidad:
let cantidades_cart = 0;
cantidades_cart_array.forEach((num) => {
  cantidades_cart += parseInt(num);
});

console.log(cantidades_cart);

const cantidad_resumen_cart = document.getElementById("cantidad_resumen_cart");
cantidad_resumen_cart.textContent = String(cantidades_cart);

//monto resumen:

let montos_cart = 0;
montos_cart_array.forEach((num) => {
  montos_cart += parseFloat(num);
});

console.log(montos_cart.toFixed(2));

const monto_resumen_subtotal_cart = document.getElementById(
  "monto_resumen_subtotal"
);
monto_resumen_subtotal_cart.textContent = String(montos_cart.toFixed(2));

const monto_resumen_total_cart = document.getElementById("monto_resumen_total");
monto_resumen_total_cart.textContent = String(montos_cart.toFixed(2));

//script botones cart:

for (let id = 1; id <= cantidad_items_cart; id++) {
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

        //efecto en Resumen:

        const cantidad_resumen_cart_preclick_pos = document.getElementById(
          "cantidad_resumen_cart"
        );
        let qtot = parseInt(cantidad_resumen_cart_preclick_pos.textContent);
        qtot++;
        cantidad_resumen_cart_preclick_pos.textContent = String(qtot);

        const monto_resumen_subtotal_cart_preclick_pos =
          document.getElementById("monto_resumen_subtotal");
        let sub = parseFloat(
          monto_resumen_subtotal_cart_preclick_pos.textContent
        );
        sub += p;
        monto_resumen_subtotal_cart_preclick_pos.textContent = String(
          sub.toFixed(2)
        );

        const monto_resumen_total_cart_preclick_pos = document.getElementById(
          "monto_resumen_total"
        );
        let tot = parseFloat(monto_resumen_total_cart_preclick_pos.textContent);
        tot += p;
        monto_resumen_total_cart_preclick_pos.textContent = String(
          tot.toFixed(2)
        );
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

          //efecto en Resumen:

          const cantidad_resumen_cart_preclick_neg = document.getElementById(
            "cantidad_resumen_cart"
          );
          let qtot = parseInt(cantidad_resumen_cart_preclick_neg.textContent);
          qtot--;
          cantidad_resumen_cart_preclick_neg.textContent = String(qtot);

          const monto_resumen_subtotal_cart_preclick_neg =
            document.getElementById("monto_resumen_subtotal");
          let sub = parseFloat(
            monto_resumen_subtotal_cart_preclick_neg.textContent
          );
          sub -= p;
          monto_resumen_subtotal_cart_preclick_neg.textContent = String(
            sub.toFixed(2)
          );

          const monto_resumen_total_cart_preclick_neg = document.getElementById(
            "monto_resumen_total"
          );
          let tot = parseFloat(
            monto_resumen_total_cart_preclick_neg.textContent
          );
          tot -= p;
          monto_resumen_total_cart_preclick_neg.textContent = String(
            tot.toFixed(2)
          );
        }
      });
  }
}

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
