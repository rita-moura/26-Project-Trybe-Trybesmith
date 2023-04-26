import { Request, Response } from 'express';
import * as productService from '../services/productsService';

export async function create(req: Request, res: Response) {
  const product = req.body;
  const newProduct = await productService.create(product);

  if ('message' in newProduct) {
    const { type, message } = newProduct;
    return res.status(type as number).json({ message });
  }

  res.status(201).json(product);
}

export async function getAll(_req: Request, res: Response) {
  const products = await productService.getAll();

  res.status(200).json(products);
}
