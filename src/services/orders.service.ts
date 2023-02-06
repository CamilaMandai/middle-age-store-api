import ordersModel from '../models/orders.model';

const findAll = async () => {
  const result = await ordersModel.findAll();
  return result;
};

export default {
  findAll,
};
