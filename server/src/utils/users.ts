import pool from './db';
import { v4 as uuidv4 } from 'uuid';
import { User, UserQueryResult, UserWithPasswordQueryResult } from '../types';
import bcrypt from 'bcrypt';

export const getUserDetails = async (id: string): Promise<User> => {
  const result: UserQueryResult = await pool.query(
    'SELECT id, username, role, created_at FROM users WHERE id = $1',
    [id],
  );
  if (result.rows.length === 0) {
    throw new Error('User not found');
  }
  return result.rows[0];
};

export const getAllUsers = async (): Promise<User[]> => {
  const result: UserQueryResult = await pool.query(
    'SELECT id, username, role, created_at FROM users',
  );
  return result.rows;
};

export const createUser = async ({
  username,
  password,
  role,
}: {
  username: string;
  password: string;
  role: string;
}): Promise<User> => {
  console.log('createUser function called with username:', username);
  const id = uuidv4();
  const createdAt = new Date();
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  const result: UserQueryResult = await pool.query(
    'INSERT INTO users (id, username, hashedpassword, role, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, role, created_at',
    [id, username, hashedPassword, role, createdAt],
  );
  return result.rows[0];
};

export const getUserByUsernameWithPassword = async (
  username: string,
): Promise<UserWithPassword | null> => {
  const result: UserWithPasswordQueryResult = await pool.query(
    'SELECT id, username, hashedpassword, role, created_at FROM users WHERE username = $1',
    [username],
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteUserById = async (id: string): Promise<boolean> => {
  const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  return result.rowCount > 0;
};
