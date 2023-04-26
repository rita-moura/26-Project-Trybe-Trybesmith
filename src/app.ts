import express from 'express';
import productRouter from './routers/productsRouter';
import userRouter from './routers/usersRouter';
import orderRouter from './routers/ordersRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
