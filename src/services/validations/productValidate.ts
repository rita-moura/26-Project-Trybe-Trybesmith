import Joi from 'joi';
import { Product } from '../../interfaces/product';

const loginSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default function validateProduct(product: Product) {
  const { error } = loginSchema.validate(product);

  if (error) return { type: 422, message: error.message };

  return { type: '', message: '' };
}