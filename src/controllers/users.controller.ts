import { Request, Response } from 'express';
import usersService from '../services/users.service';

const findAll = async (_req : Request, res : Response) : Promise<Response> => {
  const result = await usersService.findAll();
  return res.status(200).json(result);
};

const create = async (req : Request, res : Response) : Promise<Response> => {
  const token = await usersService.create(req.body);
  return res.status(201).json({ token });
};

export default {
  findAll,
  create,
};