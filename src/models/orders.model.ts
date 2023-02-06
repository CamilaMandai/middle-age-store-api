import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const findAll = async (): Promise<ResultSetHeader> => {
  // dica do Anderson Nunes de usar o ARRAYAGG
  const sqlQuery = 'SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds '
  + 'FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p ON o.id= p.order_id '
  + 'GROUP BY o.id';
  const [result] = await connection.execute<ResultSetHeader>(sqlQuery);
  return result;
};

export default {
  findAll,
};
