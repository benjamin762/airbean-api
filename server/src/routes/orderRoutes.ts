// server/src/routes/orderRoutes.ts
import { Router } from 'express';
import { createOrderHandler } from '../controllers/orderController';
import { getOrders } from '../controllers/orderController';
import mockAuth from '../middleware/mockAuth';

const router = Router();

router.post('/new', createOrderHandler);
router.get('/', mockAuth, getOrders);

export default router;