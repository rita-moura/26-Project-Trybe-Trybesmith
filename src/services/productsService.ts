import { Product } from '../interfaces/product';
import * as productModel from '../models/productsModel';
import validateProduct from './validations/productValidate';

export async function create(product: Product) {
  const { type, message } = validateProduct(product);

  if (type) return { type, message };
  
  return productModel.create(product);
}

export async function getAll() {
  return productModel.getAll();
}