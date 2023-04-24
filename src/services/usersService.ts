import { User } from '../interfaces/user';
import UserModel from '../models/usersModel';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}