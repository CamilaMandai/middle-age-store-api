import jwt from 'jsonwebtoken';

import usersModel from '../models/users.model';
import { IUsers } from '../interfaces';

const TOKEN_SECRET: string = process.env.TOKEN_SECRET || 'secretJWT';

const generateToken = (user: IUsers): string => {
  try {
    return jwt.sign(user, TOKEN_SECRET, {
      expiresIn: '1m',
      algorithm: 'HS256',
    });
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const isValidUser = async (user: { username: string, password: string }) => {
  const [result] = await usersModel.findByNameAndPassword(user.username, user.password);
  if (!result) return { type: 'error', message: 'Username or password invalid' };
  const userResult: IUsers = {
    id: result.id,
    username: result.username,
    vocation: result.vocation,
    level: result.level,
    password: result.password,
  };
  // const userResult: IUsers = result as IUsers;
  const token = generateToken(userResult);
  return { type: null, message: token };
};

export default {
  isValidUser,
};