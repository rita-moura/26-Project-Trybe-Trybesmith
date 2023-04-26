import { Router } from 'express';
import getAllController from '../controllers/ordersController';

const orderRouter = Router();

orderRouter.get('/', getAllController);

export default orderRouter;