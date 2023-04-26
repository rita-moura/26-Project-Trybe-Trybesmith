import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const login = req.body;

  const { error } = loginSchema.validate(login);

  if (error) return res.status(400).json({ message: error.message });

  next();
}