// server/src/routes/productRoutes.ts

import { Router } from 'express';
import { getProducts, getOneProduct } from '../controllers/productController';

const router = Router();

router.get('/', getProducts);

export default router;