import { Order } from '../interfaces/order';
import getAllModel from '../models/ordersModel';

export default async function getAllService(): Promise<Order[]> {
  const orders = await getAllModel();
    
  return orders;
}
