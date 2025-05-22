import express from 'express';
import { getUserDetails, getAllUsers, deleteUserById } from '../utils/users';
import authenticateJWT from '../middleware/auth/authenticateJWT';
import { AuthenticatedRequest } from '../types';

const router = express.Router();

// GET all users (potentially move to Admin.routes.ts)
router.get('/', authenticateJWT, async (req, res) => {
  // Added authentication
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err: any) {
    console.error('Error fetching all users:', err.message);
    res.status(500).json({ error: 'Server error fetching users.' });
  }
});

// GET user details for logged-in user
router.get('/me', authenticateJWT, async (req: AuthenticatedRequest, res) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: 'User not authenticated.' });
    }
    const user = await getUserDetails(req.user.id);
    res.json(user);
  } catch (err: any) {
    console.error('Error fetching user details:', err.message);
    res.status(500).json({ error: 'Server error fetching user details.' });
  }
});

// DELETE logged-in user account
router.delete(
  '/me',
  authenticateJWT,
  async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ error: 'User not authenticated.' });
      }
      const success = await deleteUserById(req.user.id);
      if (success) {
        res.json({ message: 'Account deleted successfully.' });
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (err: any) {
      console.error('Error deleting user account:', err.message);
      res.status(500).json({ error: 'Server error deleting account.' });
    }
  },
);

export default router;
