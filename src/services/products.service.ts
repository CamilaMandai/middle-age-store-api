import productsModel from '../models/products.model';
import { IProduct } from '../interfaces';

const findAll = async () => {
  const result = await productsModel.findAll();
  return result;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const { insertId } = await productsModel.create(name, amount);
  const result : IProduct = {
    name,
    amount,
    id: insertId,
  };
  return result;
};

export default {
  findAll,
  create,
};
