import { Request, Response, NextFunction } from 'express';
import * as cartService from '../services/cartService';

export async function getCart(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '38590ad4-51b0-4ee4-872e-9ca5ca624871';
        const cart = await cartService.getCart(userId);
        res.json(cart)
    } catch (err) {
        next(err);
    }
}