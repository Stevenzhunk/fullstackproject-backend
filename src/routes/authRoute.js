import express from 'express';

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.send('<h1>Soy el Login Auth</h1>');
});

authRouter.post('/login', (req, res) => {
  res.send('<h1>Soy el post del Login Auth</h1>');
});

authRouter.get('/register', (req, res) => {
  res.send('<h1>Soy el Register Auth</h1>');
});

authRouter.post('/register', (req, res) => {
  res.send('<h1>Soy el post de Register Auth</h1>');
});

authRouter.get('/logout', (req, res) => {
  res.send('<h1>Soy el Logout Auth</h1>');
});

export default authRouter;
