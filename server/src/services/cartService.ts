import { Cart } from '../../../shared/cart';
import db from '../config/db';

export async function getCart(userId: string): Promise<Cart> {
    const result = await db.query(
        `SELECT json_agg(json_build_object(
            'id', p.id,
            'name', p.name,
            'price', p.price,
            'description', p.description,
            'quantity', ci.quantity
        )) AS cart
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.user_id = $1`, 
        [userId]
    );
    return result.rows[0].cart;
}