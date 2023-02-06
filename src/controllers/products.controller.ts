import { Request, Response } from 'express';
import productsService from '../services/products.service';

const findAll = async (req : Request, res : Response) : Promise<Response> => {
  const allProducts = await productsService.findAll();
  return res.status(200).json(allProducts);
};

const create = async (req : Request, res : Response) : Promise<Response> => {
  const productCreated = await productsService.create(req.body);
  return res.status(201).json(productCreated);
};

export default {
  findAll,
  create,
};