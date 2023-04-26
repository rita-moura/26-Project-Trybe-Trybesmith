import { Product, Validation } from '../interfaces/product';
import * as productModel from '../models/productsModel';
import validateProduct from './validations/productValidate';

export async function create(product: Product): Promise<Product | Validation> {
  const { type, message } = validateProduct(product);

  if (type) return { type, message };
  
  return productModel.create(product);
}

export async function getAll(): Promise<Product[]> {
  return productModel.getAll();
}