import express from 'express';
// import measurementsRouter from "./measurementsRoutes"; // Example import
// import sensorsRouter from "./sensors"; // Example import
import authorizeRole from '../middleware/auth/authorizeRole';
import authenticateJWT from '../middleware/auth/authenticateJWT';

const router = express.Router();

// Protect all routes in this file.
router.use(authenticateJWT);

// Example of how to use authorizeRole
// router.use("/measurements", authorizeRole(['user', 'admin']), measurementsRouter);
// router.use("/sensors", authorizeRole(['admin']), sensorsRouter);

// Example protected route
router.get('/protected-data', authorizeRole(['user', 'admin']), (req, res) => {
  res.json({ message: 'This is protected data!' });
});

export default router;
