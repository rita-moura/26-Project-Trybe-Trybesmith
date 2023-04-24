import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user';

const secretKey: Secret = process.env.JWT_SECRET || 'JWT_SECRET';

const jwtConfig: SignOptions = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

function generateToken(payload: User) {
  return jwt.sign({
    data: {
      username: payload.username,
      vocation: payload.vocation,
      level: payload.level,
    },
  }, secretKey, jwtConfig);
}

export default generateToken;
