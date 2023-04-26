import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validateProduct from '../middlewares/productsMiddleware';

const productRouter = Router();

productRouter.post('/', validateProduct, productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;