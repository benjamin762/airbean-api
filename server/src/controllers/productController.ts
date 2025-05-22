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

export async function getOneProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await productService.fetchOneProduct(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
}