import productsModel from '../models/products.model';
import { IProduct } from '../interfaces';

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
  create,
};
