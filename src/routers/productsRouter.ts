import { Router } from 'express';
import ProductController from '../controllers/productsController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;