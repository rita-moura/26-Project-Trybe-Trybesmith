import { Request, Response } from 'express';
import * as userService from '../services/usersService';
import { generateToken } from '../utils/token';

export async function create(req: Request, res: Response): Promise<void> {
  const user = await userService.create(req.body);
  const token = generateToken(user);
  res.status(201).json({ token });
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  const login = await userService.login(req.body);
  const token = generateToken(login);

  res.status(200).json({ token });
}
