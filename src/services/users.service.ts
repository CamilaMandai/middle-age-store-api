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

const findAll = async () => {
  const result = await usersModel.findAll();
  return result;
};

const create = async (user: IUsers): Promise<string> => {
  const { username, vocation, level, password } = user;
  const result = await usersModel.create(user);
  const newUser: IUsers = {
    id: result.insertId,
    username,
    vocation,
    level,
    password,
  };
  const token: string = generateToken(newUser);
  return token;
};

export default {
  findAll,
  create,
};