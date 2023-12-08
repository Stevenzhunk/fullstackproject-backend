//env init
require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./src/models/connection');
const mainRouter = require('./src/routes/mainRoute.js');
const adminRouter = require('./src/routes/adminRoute.js');
const shopRouter = require('./src/routes/shopRoute');
const authRouter = require('./src/routes/authRoute.js');
const User = require('./src/models/User');

//rest obj init
const app = express();

//Logs Morgan dev
app.use(morgan('dev'));

// Acces CSS, JPG to public
app.use(express.static(path.join(__dirname, 'public')));

//set Template Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//set express Layouts
app.use(expressLayouts);

// app.set('layout', '/src/views/layouts');
app.set('layout', path.join(__dirname, 'src/views/layouts/layout'));

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

console.log(`base de datos en server.js es ${process.env.LOCAL_DATABASE}`);

//listen and database
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
  
  console.log(`server is runing on port ${PORT}`.bgCyan.white);
  console.log(`http://localhost:${PORT}`);
});
