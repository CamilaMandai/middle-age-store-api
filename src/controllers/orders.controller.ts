import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const findAll = async (req : Request, res : Response) : Promise<Response> => {
  const allProducts = await ordersService.findAll();
  return res.status(200).json(allProducts);
};

export default {
  findAll,
};
