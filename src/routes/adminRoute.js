const express = require('express');

//guardado de imagenes
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

//routes Obj
const adminRouter = express.Router();

const { body } = require('express-validator');
const validations = [
  body('product_name')
    .not()
    .isEmpty()
    .withMessage('El nombre es obligatorio')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Nombre tiene que tener 3 caracteres'),
  body('price').not().isEmpty().withMessage('El precio es obligatorio'),
];

const controller = require('../controllers/adminController.js');

adminRouter.get('/', controller.adminHome);

adminRouter.get('/create', controller.adminCreate);

adminRouter.post(
  '/',
  upload.single('image'),
  validations,
  controller.adminCreateStore
);

adminRouter.get('/edit/:id', controller.adminEditGet);

adminRouter.put('/edit/:id', controller.adminEditPut);

adminRouter.delete('/edit/:id', controller.adminDelete);

module.exports = adminRouter;
