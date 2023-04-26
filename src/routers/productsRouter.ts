import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import { validateAmount, validateName } from '../middlewares/productsMiddleware';

const productRouter = Router();

productRouter.post('/', validateName, validateAmount, productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;