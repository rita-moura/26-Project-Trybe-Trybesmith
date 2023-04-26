import { Request, Response } from 'express';
import getAllService from '../services/ordersService';

export default async function getAllController(_req: Request, res: Response) {
  const orders = await getAllService();

  return res.status(200).json(orders);
}
