import { User } from '../interfaces/user';
import * as userModel from '../models/usersModel';

export async function create(user: User): Promise<User> {
  return userModel.create(user);
}

export async function login(user: User): Promise<User> {
  return userModel.findByUsername(user);
}
