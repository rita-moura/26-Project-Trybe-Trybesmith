import { Request, Response } from 'express';
import UserService from '../services/usersService';
import generateToken from '../utils/token';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = await this.service.create(req.body);
    const token = generateToken(user);

    res.status(201).json({ token });
  }
}