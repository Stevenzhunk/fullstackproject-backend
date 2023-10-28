import express from 'express';

//routes Obj
const router = express.Router();

router.get('/', (res, req) => {
  res.send('<h1>Im route</h1>');
});

export default router;
