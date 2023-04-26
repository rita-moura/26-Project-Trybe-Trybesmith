import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product = req.body;

  const { error } = loginSchema.validate(product);

  if (error) return res.status(400).json({ message: error.message });

  next();
}