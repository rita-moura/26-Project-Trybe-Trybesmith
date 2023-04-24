import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/user';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
      [user.username, user.vocation, user.level, user.password],
    );

    return { id: insertId, ...user };
  }
}
