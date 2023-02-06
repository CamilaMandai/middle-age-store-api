import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces';
import connection from './connection';

const create = async (user: IUsers): Promise<ResultSetHeader> => {
  const { username, vocation, level, password } = user;
  const sqlQuery = 'INSERT INTO Trybesmith.users '
   + '(username, vocation, level, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection
    .execute<ResultSetHeader>(sqlQuery, [username, vocation, level, password]);
  return result;
};

export default {
  create,
};