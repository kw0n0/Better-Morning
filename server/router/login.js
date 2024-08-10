import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send('로그인되면 유저에게 전달해야하는 정보');
});

export default router;
