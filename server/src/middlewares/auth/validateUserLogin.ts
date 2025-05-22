import { Request, Response, NextFunction } from 'express';
import { getUserByUsernameWithPassword } from '../../utils/users';
import { UserWithPassword } from '../../types';

const validateUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;

  if (typeof username !== 'string') {
    return res.status(400).json({ error: 'Username must be a string.' });
  }

  try {
    const user: UserWithPassword | null =
      await getUserByUsernameWithPassword(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    (req as any).user = user; // Attach user with password to req for password check
    next();
  } catch (err: any) {
    console.error('Login validation error:', err.message);
    res.status(500).json({ error: 'Server error during login.' });
  }
};

export default validateUserLogin;
