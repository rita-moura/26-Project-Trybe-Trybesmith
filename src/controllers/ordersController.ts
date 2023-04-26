import { Request, Response } from 'express';
import getAllService from '../services/ordersService';

export default async function getAllController(_req: Request, res: Response): Promise<void> {
  const orders = await getAllService();

  res.status(200).json(orders);
}
