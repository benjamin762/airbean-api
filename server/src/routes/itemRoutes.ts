// server/src/routes/itemRoutes.ts
import { Router } from 'express';
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from '../controllers/itemController';


const router = Router();

const methods = ['get', 'post', 'put', 'delete', 'use'] as const;

methods.forEach((method) => {
  const original = router[method];
  router[method] = function (path: any, ...handlers: any[]) {
    if (typeof path === 'string') {
      console.log(`Router ${method.toUpperCase()} path:`, path);
    }
    // Cast original as any to avoid TS spread tuple errors
    return (original as any).call(router, path, ...handlers);
  };
});

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;