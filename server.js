import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import mainRouter from './src/routes/mainRoute.js';
import adminRouter from './src/routes/adminRoute.js';
import shopRoute from './src/routes/shopRoute.js';
import authRouter from './src/routes/authRoute.js';

//Process env
dotenv.config();

//rest obj init
const app = express();

// static public
app.use(express.static('public'));

//Logs Morgan dev
app.use(morgan('dev'));

//routes Main, Admin, Shop
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/shop', shopRoute);
app.use('/auth', authRouter);

//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT.bgGreen.black}`.bgCyan.white);
});

// //connect DataBase
// connectDB();
