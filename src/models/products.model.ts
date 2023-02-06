import { ResultSetHeader } from 'mysql2';
import connection from './connection';
// import { IProduct } from '../interfaces';

const create = async (name : string, amount: string) : Promise<ResultSetHeader> => {
  const sqlQuery = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection
    .execute<ResultSetHeader>(sqlQuery, [name, amount]);
  // const newProduct = await connection
  //   .execute(`SELECT id, name, amount FROM Trybesmith.products WHERE id=${insertId}`);
  return result;
};

export default {
  create,
};