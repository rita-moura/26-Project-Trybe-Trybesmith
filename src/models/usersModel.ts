import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/user';

export async function create(user: User): Promise<User> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
    [user.username, user.vocation, user.level, user.password],
  );

  return { id: insertId, ...user };
}

export async function findByUsername({ username, password }: User): Promise<User> {
  const [user] = await connection.execute<User & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );

  console.log('model', user);
    
  return user;
}
