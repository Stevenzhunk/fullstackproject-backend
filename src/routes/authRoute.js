const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController.js');

authRouter.get('/login', authController.getLogin);

authRouter.post('/login', authController.createLogin);

authRouter.get('/register', authController.getRegister);

authRouter.post('/register', authController.createRegister);

authRouter.get('/logout', authController.logout);

module.exports = authRouter;
