// server/src/routes/orderRoutes.ts
import { Router } from 'express';
import { createOrderHandler } from '../controllers/orderController';
import { getOrders, getOrdersWithItems } from '../controllers/orderController';
import mockAuth from '../middleware/mockAuth';

const router = Router();

router.post('/new', createOrderHandler);
router.get('/my-orders', mockAuth, getOrdersWithItems); //!currently using harrcoded userID for testing
router.get('/', getOrders); // get all orders //! for testing

export default router;