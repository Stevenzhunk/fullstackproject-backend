import express from 'express';
import morgan from 'morgan';
// import cors from 'cors'; <--- for front/back
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

//Process env
dotenv.config();

//rest obj init
const app = express();

//Logs Morgan dev
app.use(morgan('dev'));

//Rest Api
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>');
});

//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT.bgGreen.black}`.bgCyan.white);
});

//connect DataBase
connectDB();
