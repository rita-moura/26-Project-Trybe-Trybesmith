import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/product';

export async function create(product: Product): Promise<Product> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [product.name, product.amount],
  );

  return { id: insertId, ...product };
}

export async function getAll(): Promise<Product[]> {
  const [rows] = await connection.execute<(Product & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.products');
  return rows;
}
