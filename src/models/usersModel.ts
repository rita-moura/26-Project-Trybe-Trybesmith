import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/user';
import { Login } from '../interfaces/login';

export async function create(user: User) {
  const [{ insertId }] = await connection.execute<User & ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
    [user.username, user.vocation, user.level, user.password],
  );

  return { id: insertId, ...user };
}

export async function findByUsername({ username, password }: Login) {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
    
  return result as User;
}
