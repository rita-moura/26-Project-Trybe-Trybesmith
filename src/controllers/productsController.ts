import { Request, Response } from 'express';
import ProductService from '../services/productsService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = await this.service.create(req.body);

    res.status(201).json(product);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.service.getAll();

    res.status(200).json(products);
  }
}