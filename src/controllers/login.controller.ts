import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req : Request, res : Response) : Promise<Response> => {
  const token = await loginService.isValidUser(req.body);
  if (token.type) return res.status(401).json(token.message);
  return res.status(200).json({ token: token.message });
};

export default {
  login,
};