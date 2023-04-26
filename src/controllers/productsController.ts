import { Request, Response } from 'express';
import * as productService from '../services/productsService';

export async function create(req: Request, res: Response): Promise<void> {
  const product = await productService.create(req.body);

  res.status(201).json(product);
}

export async function getAll(_req: Request, res: Response): Promise<void> {
  const products = await productService.getAll();

  res.status(200).json(products);
}
