const model = require('../models/productModel');
const modelLicences = require('../models/license');

const sharp = require('sharp');
const { validationResult } = require('express-validator');

const path = require('path');

const fs = require('fs');

const adminHome = async (req, res) => {
  try {
    const products = await model.findAll({
      include: modelLicences,
    });
    res.render('admin', {
      layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
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
    res.render('create', {
      layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
      licenses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const adminCreateStore = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    try {
      const licenses = await modelLicences.findAll();
      return res.render('create', {
        layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
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
    let i = 0;
    const images = req.files;
    const data = req.body;
    let productModel = data;
    const dateId = Date.now();

    if (images) {
      const imageFrontModel = `/uploads/products/producto_front_${dateId}.png`;
      const imageBackModel = `/uploads/products/producto_back_${dateId}.png`;
      productModel = {
        image_front: imageFrontModel,
        image_back: imageBackModel,
        ...data,
      };
    }
    const products = await model.create(productModel);
    if (products && req.files) {
      images.forEach((image) => {
        const pathImage = `../../public/uploads/products/producto_${
          i == 0 ? 'front' : 'back'
        }_${dateId}.png`;
        sharp(image.buffer)
          .resize(400, 400, {
            fit: 'contain',
            background: '#FFF',
          })
          .toFile(path.resolve(__dirname, pathImage))
          .catch((error) => console.log(error));
        i++;
      });
    }
    res.redirect('/admin');
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
      res.render('edit', {
        layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
        productos,
        licenses,
      }); //machete dice: {values: productos}
      console.log(productos);
    } else {
      res.status(404).send('El producto no existe');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const adminEditPut = async (req, res) => {
  console.log(req.params, req.body, req.files);
  //if (req.files) {
  //  console.log(req.files[0].buffer, req.files[1].buffer);
  //}

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('edit', {
      values: req.body,
      errors: errors.array(), // ver esto, me faltaría algo que imprima los errores en la vista (creo)
    });
  }

  try {
    const affected = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affected[0] == 1) {
      const product = await model.findByPk(req.params.id);
      const pathFront = product.dataValues.image_front;
      console.log(pathFront);
      const pathBack = product.dataValues.image_back;
      console.log(pathBack);
      if (req.files[0]) {
        const imageFront = req.files[0].buffer;

        sharp(imageFront)
          .resize(300)
          .toFile(path.resolve(__dirname, `../../public${pathFront}`));
      }
      if (req.files[1]) {
        const imageBack = req.files[1].buffer;
        sharp(imageBack)
          .resize(300)
          .toFile(path.resolve(__dirname, `../../public${pathBack}`));
      }

      //res.send('Producto Actualizado Correctamente. Redirigiendo al Admin...');
      //VER COMO INCLUYO UNA CONFIRMACIÓN DE MOFICACIÓN ANTES DE QUE REDIRIJA AL ADMIN

      res.redirect('/admin');
    } else {
      res.status(500).send('Error al actualizar el producto');
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

const adminDelete = async (req, res) => {
  console.log(req.params.id);

  const product = await model.findByPk(req.params.id);
  const pathFront = product.dataValues.image_front;
  console.log(pathFront);
  const pathBack = product.dataValues.image_back;
  console.log(pathBack);

  try {
    const result = await model.destroy({
      where: {
        id: req.params.id,
      },
    });
    // console.log(result);

    if (result == 1) {
      fs.unlink(
        path.resolve(__dirname, `../../public${pathFront}`),
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
      fs.unlink(path.resolve(__dirname, `../../public${pathBack}`), (error) => {
        if (error) {
          console.log(error);
        }
      });
    }

    res.redirect('/admin');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  adminHome,
  adminCreate,
  adminCreateStore,
  adminEditGet,
  adminEditPut,
  adminDelete,
};

