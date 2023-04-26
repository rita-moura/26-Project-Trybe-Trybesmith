import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';
import * as userModel from '../models/usersModel';
import validateUser from './validations/userValidate';

export async function create(user: User) {
  const { type, message } = validateUser(user);

  if (type) return { type, message };
  
  return userModel.create(user);
}

export async function loginUser(login: Login) {
  return userModel.findByUsername(login);
}
