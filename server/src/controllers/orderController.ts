// server/src/controllers/orderController.ts

import { Request, Response, NextFunction } from 'express';
import { createOrder, getOrdersFromDb } from '../services/orderService';
import { OrderInput } from '../../../shared/order';
import { fetchOneProduct } from '../services/productService';
import { Product } from '../../../shared/product';

export async function createOrderHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const order: OrderInput = req.body;

    //validate required fields
    if (
      !order.userID ||
      !order.estimatedTimeMinutes ||
      !order.items
    ) {
      throw new Error('Missing required fields');
    }

    if (!order.status){
      order.status = 'pending';
    }

    for (const item of order.items) {
        const product = await fetchOneProduct(item.productID);
        if (!product) {
          throw new Error(`Product with ID ${item.productID} not found`);
        }
      }

    // You could validate more here if needed

    const createdOrder = await createOrder(order);

    res.status(201).json(createdOrder);
  } catch (err) {
    console.error('Error creating order:', err); // optional debugging
    next(err); // will be handled by your error middleware
  }
}

export async function getOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = (req as any).user?.id;
    const orders = await getOrdersFromDb(userId);
    res.json(orders);
  } catch (err) {
    next(err);
  }
}