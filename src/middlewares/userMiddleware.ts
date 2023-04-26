import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.required(),
  vocation: Joi.required(),
  level: Joi.required(),
  password: Joi.required(),
});

export default function validateUser(req: Request, res: Response, next: NextFunction) {
  const user = req.body;

  const { error } = userSchema.validate(user);

  if (error) return res.status(400).json({ message: error.message });

  next();
}