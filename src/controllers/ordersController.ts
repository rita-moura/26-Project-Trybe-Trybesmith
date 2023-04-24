import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.service.getAll();

    res.status(200).json(orders);
  }
}