//importación de módulos con ES Modules -suspendido-

/*
import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import mainRouter from "./src/routes/mainRoute.js";
import adminRouter from "./src/routes/adminRoute.js";
const shopRoute = require("./src/routes/shopRoute");
import authRouter from "./src/routes/authRoute.js";
*/

//importacion de módulos con sintaxis CommonJS:

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const mainRouter = require('./src/routes/mainRoute.js');
const adminRouter = require('./src/routes/adminRoute.js');
const shopRouter = require('./src/routes/shopRoute');
const authRouter = require('./src/routes/authRoute.js');
const expressLayouts = require('express-ejs-layouts');

//rest obj init
const app = express();

// Acces CSS, JPG to public
app.use(express.static(path.join(__dirname, 'public')));

//seteo Template Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//seteo express Layouts
app.use(expressLayouts);
// app.set('layout', '/src/views/layouts');
app.set('layout', path.join(__dirname, 'src/views/layouts/layout'));

//Process env
dotenv.config();

// static public
// app.use(express.static('public'));

//Logs Morgan dev
app.use(morgan('dev'));

//routes Main, Admin, Shop y Auth
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.status(404).send('La pagina no existe');
});

//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`.bgCyan.white);
});

// //connect DataBase
// connectDB();
