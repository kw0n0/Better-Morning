import express from 'express';

const router = express.Router();

const users = [
  {
    id: '규현',
    password: '0000',
  },
  {
    id: 'test',
    password: '0000',
  },
];

router.post('/', async (req, res) => {
  const data = req.body;

  const user = users.find((user) => user.id === data.id);
  if (!user) {
    return res.status(400).json({ message: '사용자를 찾을 수 없습니다.' });
  }

  if (user.password === data.password) {
    res.sendStatus(201);
    return;
  }

  res.status(400).json({ message: '비밀번호가 올바르지 않습니다.' });
});

export default router;
