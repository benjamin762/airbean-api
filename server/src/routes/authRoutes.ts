import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validateRegisterInput from '../middleware/validateRegisterInput';
import checkUserExists from '../middleware/checkUserExists';
import validateUserLogin from '../middleware/auth/validateUserLogin';
import { createUser } from '../utils/users';
import { UserWithPassword } from '../types';

const router = express.Router();

// Register a new user
router.post(
  '/register',
  validateRegisterInput,
  checkUserExists,
  async (req, res) => {
    const { username, password } = req.body;
    const defaultRole = 'user'; // Assign a default role

    try {
      const newUser = await createUser({
        username,
        password,
        role: defaultRole,
      });
      // Do not return the hashed password in the response
      const userWithoutPassword = {
        id: newUser.id,
        username: newUser.username,
        role: newUser.role,
        created_at: newUser.created_at,
      };
      res.status(201).json(userWithoutPassword);
    } catch (err: any) {
      console.error('Error registering user:', err.message);
      res.status(500).json({ error: 'Server error during registration.' });
    }
  },
);

// Login user
router.post('/login', validateUserLogin, async (req, res) => {
  const { password } = req.body;
  const user = (req as any).user as UserWithPassword; // Type assertion

  try {
    const isMatch = await bcrypt.compare(password, user.hashedpassword);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }, // Token expires in 1 hour
    );

    res.json({ token });
  } catch (err: any) {
    console.error('Error logging in:', err.message);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

// Logout (client-side simply discards the token)
router.post('/logout', (req, res) => {
  res.json({
    message: 'Logout successful (token should be discarded by client).',
  });
});

export default router;
