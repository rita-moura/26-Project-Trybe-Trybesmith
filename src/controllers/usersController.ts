import { Request, Response } from 'express';
import * as userService from '../services/usersService';
import { generateToken } from '../utils/token';

export async function create(req: Request, res: Response) {
  const user = await userService.create(req.body);
  const token = generateToken(user);
  res.status(201).json({ token });
}

export async function loginUser(req: Request, res: Response) {
  const login = req.body;
  const user = await userService.loginUser(login);
  const token = generateToken(login);

  if (!user) {
    res.status(401).json({ message: 'Username or password invalid' });
    return;
  }

  res.status(200).json({ token });
}
