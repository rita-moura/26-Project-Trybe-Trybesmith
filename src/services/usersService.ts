import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';
import * as userModel from '../models/usersModel';

export async function create(user: User) {
  return userModel.create(user);
}

export async function loginUser(login: Login) {
  return userModel.findByUsername(login);
}
