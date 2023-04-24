import express from 'express';
import productRouter from './routers/productsRouter';
import userRouter from './routers/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
