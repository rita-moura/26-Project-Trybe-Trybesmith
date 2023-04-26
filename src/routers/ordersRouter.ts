import { Router } from 'express';
import { getAll } from '../controllers/productsController';

const orderRouter = Router();

orderRouter.get('/', getAll);

export default orderRouter;