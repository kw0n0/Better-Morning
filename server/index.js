import express from 'express';
import cors from 'cors';
import loginRouter from './router/login.js';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

app.use('/login', loginRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error) => {
  res.sendStatus(500);
});

app.listen(8080);
