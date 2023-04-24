import express from 'express';
import productRouter from './routers/productsRouter';
import userRouter from './routers/usersRouter';
import orderRouter from './routers/ordersRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
