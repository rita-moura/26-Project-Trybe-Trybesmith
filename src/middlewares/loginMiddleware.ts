import { NextFunction, Request, Response } from 'express';
import { Login } from '../interfaces/login';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body as Login;

  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
}