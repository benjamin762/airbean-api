import { Request, Response, NextFunction } from 'express';
import * as productService from '../services/productService';

export async function getProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await productService.fetchAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
}