import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = await this.productService.create(req.body);

    res.status(201).json(product);
  }
}