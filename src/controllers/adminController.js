/*ATENCION!!!
 para llamar al layout del admin en estas vistas hay que usar el path del adminCreate (linea 13 de este codigo)
  app.get('/', function(req, res) {
  res.render('the-view', { layout: 'specific-layout' });
});
*/

const model = require("../models/productModel");
const modelLicences = require("../models/license");

const sharp = require("sharp");
const { validationResult } = require("express-validator");

const path = require("path");
const adminHome = async (req, res) => {
  try {
    const products = await model.findAll({
      include: modelLicences,
    });
    res.render("admin", {
      layout: path.join(__dirname, "../views/layouts/layoutAdmin"),
      productos: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const adminCreate = async (req, res) => {
  try {
    const licenses = await modelLicences.findAll();
    res.render("create", {
      layout: path.join(__dirname, "../views/layouts/layoutAdmin"),
      licenses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const adminCreateStore = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const licenses = await modelLicences.findAll();
      return res.render("create", {
        layout: path.join(__dirname, "../views/layouts/layoutAdmin"),
        values: req.body,
        errors: errors.array(),
        licenses,
      });
    } catch (error) {
      console.log(error);
      res.status(505).send(error);
    }
  }
  try {
    const products = await model.create(req.body);
    console.log(products);

    if (req.file) {
      sharp(req.file.buffer)
        .resize(400)
        .toFile(path.resolve(__dirname, "../../public/uploads/image.jpg"))
        .catch((error) => console.log(error));
    }
    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    res.status(505).send(error);
  }
};

const adminEditGet = async (req, res) => {
  try {
    const productos = await model.findByPk(req.params.id);
    const licenses = await modelLicences.findAll();
    if (productos) {
      res.render("edit", {
        layout: path.join(__dirname, "../views/layouts/layoutAdmin"),
        productos,
        licenses,
      }); //machete dice: {values: productos}
      console.log(productos);
    } else {
      res.status(404).send("El producto no existe");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const adminEditPut = async (req, res) => {
  console.log(req.params, req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("edit", {
      values: req.body,
      errors: errors.array(), // ver esto
    });
  }

  try {
    const affected = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affected[0] == 1) {
      if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../public/img/producto_${req.params.id}.jpg`
            )
          );
      }

      res.redirect("admin");
    } else {
      res.status(500).send("Error al actualizar el producto");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// const adminEditPut = (req, res) => {
//   const { id } = req.params;
//   res.send(`<h1>soy la Actualizacion Nro: ${id} del Admin</h1>`);
// };

const adminDelete = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el Item Nro: ${id} Borrado por el Admin</h1>`);
};

module.exports = {
  adminHome,
  adminCreate,
  adminCreateStore,
  adminEditGet,
  adminEditPut,
  adminDelete,
};

// constante prueba para admin

// const productos = [
//   {
//     id: 1,
//     license_id: 'STAR WARS',
//     product_name: 'STORMTROOPER LIGHTSABER',
//     price: '1699.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/star-wars/trooper-box.webp',
//     image_front: '/img/star-wars/trooper-1.webp',
//     sku: 'STW0010001',
//     product_description:
//       'Figura coleccionable de un stormtrooper con un sable de luz jedi',
//     stock: '3',
//     discount: '10',
//     category_id: '0',
//   },
//   {
//     id: 2,
//     license_id: 'POKEMON',
//     product_name: 'PIDGEOTTO',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/pokemon/pidgeotto-box.webp',
//     image_front: '/img/pokemon/pidgeotto-1.webp',
//     sku: 'STW0010002',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 3,
//     license_id: 'HARRY POTTER',
//     product_name: 'LUNA LOVEGOOD LION MASK',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/harry-potter/luna-box.webp',
//     image_front: '/img/harry-potter/luna-1.webp',
//     sku: 'STW0010003',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 4,
//     license_id: 'STAR WARS',
//     product_name: 'BABY YODA',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/star-wars/baby-yoda-box.webp',
//     image_front: '/img/star-wars/baby-yoda-1.webp',
//     sku: 'STW0010004',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 5,
//     license_id: 'POKEMON',
//     product_name: 'CHARMANDER',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/pokemon/charmander-box.webp',
//     image_front: '/img/pokemon/charmander-1.webp',
//     sku: 'STW0010005',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 6,
//     license_id: 'HARRY POTTER',
//     product_name: 'HARRY POTTER',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/harry-potter/harry-box.webp',
//     image_front: '/img/harry-potter/harry-1.webp',
//     sku: 'STW0010006',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 7,
//     license_id: 'STAR WARS',
//     product_name: 'BOBBA FETH',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/star-wars/bobbafeth-box.webp',
//     image_front: '/img/star-wars/bobbafeth-1.webp',
//     sku: 'STW0010007',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 8,
//     license_id: 'POKEMON',
//     product_name: 'DRAGONITE',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/pokemon/dragonite-box.webp',
//     image_front: '/img/pokemon/dragonite-1.webp',
//     sku: 'STW0010008',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 9,
//     license_id: 'HARRY POTTER',
//     product_name: 'HERMIONE',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/harry-potter/hermione-box.webp',
//     image_front: '/img/harry-potter/hermione-1.webp',
//     sku: 'STW0010009',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 10,
//     license_id: 'HARRY POTTER',
//     product_name: 'SNAPE PATRONUS',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/harry-potter/snape-patronus-box.webp',
//     image_front: '/img/harry-potter/snape-patronus-1.webp',
//     sku: 'STW0010010',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 11,
//     license_id: 'POKEMON',
//     product_name: 'PIKACHU',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/pokemon/pikachu-box.webp',
//     image_front: '/img/pokemon/pikachu-1.webp',
//     sku: 'STW0010011',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 12,
//     license_id: 'POKEMON',
//     product_name: 'VULPIX',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/pokemon/vulpix-box.webp',
//     image_front: '/img/pokemon/vulpix-1.webp',
//     sku: 'STW0010011',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
//   {
//     id: 13,
//     license_id: 'STAR WARS',
//     product_name: 'LUKE',
//     price: '1799.99',
//     dues: '3 CUOTAS SIN INTERÉS',
//     image_back: '/img/star-wars/luke-box.webp',
//     image_front: '/img/star-wars/luke-1.webp',
//     sku: 'STW0010013',
//     product_description: '',
//     stock: '3',
//     discount: '10',
//     categoryId: '0',
//   },
// ];

// const licenses = [
//   {
//     id: 1,
//     name: 'Star Wars & The Mandalorian',
//     description:
//       'Disfruta de una saga que sigue agregando personajes a su colección',
//     cover: '/img/star-wars/baby-yoda-1.webp',
//     altCover: 'Bebe - Yoda',
//   },
//   {
//     id: 2,
//     name: 'Pokemon Indigo',
//     description:
//       'Atrapa todos los que puedas y disfruta de una colección llena de amigos.',
//     cover: '/img/pokemon/vulpix-1.webp',
//     altCover: 'Vulpix',
//   },
//   {
//     id: 3,
//     name: 'Harry Poter',
//     description: 'Revive los recuerdos de una saga llena de magia y encanto.',
//     cover: './img/harry-potter/snape-patronus-1.webp',
//     altCover: 'Snape Patronus',
//   },
// ];
