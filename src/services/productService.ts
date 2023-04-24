import { Product } from '../interfaces/product';
import ProductModel from '../models/productsModel';

export default class PorductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  async getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}