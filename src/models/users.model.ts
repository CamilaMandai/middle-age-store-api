import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces';
import connection from './connection';

const findAll = async () => {
  // const [result] = await connection.execute<ResultSetHeader>('SELECT * FROM Trybesmith.users');
  const [result] = await connection.execute('SELECT * FROM Trybesmith.users');
  return result;
};

const findByNameAndPassword = async (name: string, password: string) => {
  // const sqlQuery = `SELECT * FROM Trybesmith.users WHERE username = ${name} ` 
  // + `AND password = ${password}`;
  const sqlQuery = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const [result] = await connection
    .execute(sqlQuery, [name, password]); 
  return result as IUsers[]; 
};

const create = async (user: IUsers): Promise<ResultSetHeader> => {
  const { username, vocation, level, password } = user;
  const sqlQuery = 'INSERT INTO Trybesmith.users '
   + '(username, vocation, level, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection
    .execute<ResultSetHeader>(sqlQuery, [username, vocation, level, password]);
  return result;
};

export default {
  findByNameAndPassword,
  findAll,
  create,
};