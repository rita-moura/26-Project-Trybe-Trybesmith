import Joi from 'joi';
import { User } from '../../interfaces/user';

const UserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default function validateUser(user: User) {
  const { error } = UserSchema.validate(user);

  if (error) return { type: 422, message: error.message };

  return { type: '', message: '' };
}