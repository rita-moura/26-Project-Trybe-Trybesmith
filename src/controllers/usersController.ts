import { Request, Response } from 'express';
import * as userService from '../services/usersService';
import { generateToken } from '../utils/token';

export async function create(req: Request, res: Response) {
  const user = req.body;
  const newUser = await userService.create(req.body);
  
  if ('message' in newUser) {
    const { type, message } = newUser;
    return res.status(type as number).json({ message });
  }
  
  const token = generateToken(user);
  res.status(201).json({ token });
}

export async function loginUser(req: Request, res: Response) {
  const login = req.body;
  const user = await userService.loginUser(login);
  const token = generateToken(login);

  if (!user) return res.status(401).json({ message: 'Username or password invalid' });

  res.status(200).json({ token });
}
