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
  body('license_id').not().isEmpty().withMessage('La licencia es obligatoria'),
];

const controller = require('../controllers/adminController.js');

adminRouter.get('/', controller.adminHome);

adminRouter.get('/create', controller.adminCreate);

adminRouter.post(
  '/',
  upload.array('image', 2),
  validations,
  controller.adminCreateStore
);

adminRouter.get('/edit/:id', controller.adminEditGet);

adminRouter.put(
  '/edit/:id',
  upload.array('image', 2),
  validations,
  controller.adminEditPut
);

adminRouter.delete('/:id', controller.adminDelete);

module.exports = adminRouter;
