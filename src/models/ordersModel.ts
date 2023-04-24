import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../interfaces/order';

export default class OrderModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute<(Order & RowDataPacket)[]>(
      `SELECT o.id, u.id as userId,
        JSON_ARRAYAGG(p.id) as productsIds
        FROM Trybesmith.orders as o
        INNER JOIN Trybesmith.users as u ON o.user_id = u.id
        INNER JOIN Trybesmith.products as p ON p.order_id = o.id
        GROUP BY o.id;`);
    return rows;
  }
}