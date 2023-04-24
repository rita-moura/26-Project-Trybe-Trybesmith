import { Order } from '../interfaces/order';
import OrderModel from '../models/ordersModel';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    console.log(orders);
    
    return orders;
  }
}