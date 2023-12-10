const express = require('express');
const authRouter = express.Router();

const model = require('../models/User.js');

const { body } = require('express-validator');

const registerValidations = [
  body('email')
    .isEmail()
    .withMessage('Ingrese una dirección de correo electrónico válida')
    .bail()
    .custom((value, { req }) => {
      return new Promise(async (resolve, reject) => {
        try {
          const user = await model.findOne({
            where: {
              email: value,
            },
          });

          if (user) {
            console.log(user);
            return reject();
          } else {
            return resolve();
          }
        } catch (error) {
          console.log(error);
        }
      });
    })
    .withMessage('Dirección de correo electrónico duplicada'),
  body('password')
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      'La contraseña debe tener minimo 6 de largo, 1 Letra Minuscula, 1 letra Mayuscula y 1 Simbolo'
    )
    .bail()
    .custom((value, { req }) => value === req.body.password_confirmation)
    .withMessage('Las contraseñas no coinciden'),
];

const loginValidations = [
  body('email')
    .isEmail()
    .withMessage('Ingrese una dirección de correo electrónico válida'),
  body('password')
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage('La contraseña no cumple los requerimientos'),
];

const authController = require('../controllers/authController.js');

authRouter.get('/login', authController.getLogin);

authRouter.post('/login', loginValidations, authController.createLogin);

authRouter.get('/register', authController.getRegister);

authRouter.post(
  '/register',
  registerValidations,
  authController.createRegister
);

authRouter.get('/logout', authController.logout);

module.exports = authRouter;
