import { Product } from '../interfaces/product';
import * as productModel from '../models/productsModel';

export async function create(product: Product): Promise<Product> {
  return productModel.create(product);
}

export async function getAll(): Promise<Product[]> {
  return productModel.getAll();
}