import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/product';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(product: Product): Promise<Product> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
      [product.name, product.amount],
    );

    return { id: insertId, ...product };
  }

  async getAll(): Promise<Product[]> {
    const [rows] = await this.connection.execute<(Product & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return rows;
  }
}
