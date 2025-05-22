import { Request, Response, NextFunction } from 'express';
import pool from '../utils/db';
import { QueryResult } from 'pg';

const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;

  if (typeof username !== 'string') {
    return res.status(400).json({ error: 'Username must be a string.' });
  }

  try {
    const result: QueryResult = await pool.query(
      'SELECT 1 FROM users WHERE username = $1',
      [username],
    );
    if (result.rows.length > 0) {
      return res.status(409).json({ error: 'Username already exists.' });
    }
    next();
  } catch (err: any) {
    console.error('Error checking user existence:', err.message);
    res.status(500).json({ error: 'Server error checking user.' });
  }
};

export default checkUserExists;
