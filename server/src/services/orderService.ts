// server/src/services/orderService.ts
import { Order, OrderInput, OrderItem } from '../../../shared/order';
import db from '../config/db';

export async function createOrder(order: OrderInput): Promise<Order> {
  const client = await db.connect();

  try {
    await client.query('BEGIN'); // Start transaction

    // 1. Insert into orders
    const orderResult = await client.query(
      `INSERT INTO orders (user_id, status, estimated_time_minutes)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [order.userID, order.status, order.estimatedTimeMinutes]
    );

    const orderId = orderResult.rows[0].id;

    // 2. Insert items into order_items
    const orderItems: OrderItem[] = [];

    for (const item of order.items) {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity)
         VALUES ($1, $2, $3)`,
        [orderId, item.productID, item.quantity]
      );

      orderItems.push({
        orderID: orderId,
        productID: item.productID,
        quantity: item.quantity,
      });
    }

    await client.query('COMMIT'); // Commit transaction

    return {
      id: orderId,
      userID: order.userID,
      status: order.status,
      orderDate: order.orderDate,
      estimatedTimeMinutes: order.estimatedTimeMinutes,
      items: orderItems,
    };
  } catch (error) {
    await client.query('ROLLBACK'); // All or nothing - Rollback on error
    throw error;
  } finally {
    client.release(); // Release client to pool if everything is ok
  }
}

export async function fetchOrdersFromDb(userId?: string): Promise<Order[]> {
    const query = userId
      ? 'SELECT * FROM orders WHERE user_id = $1'
      : 'SELECT * FROM orders';
  
    const values = userId ? [userId] : [];
  
    const result = await db.query(query, values);
    return result.rows;
  }

  export async function fetchOrdersWithItems(userId?: string): Promise<Order[]> {
    const query = userId
      ? `
      SELECT 
        o.*, 
        json_agg(
          json_build_object(
            'productID', oi.product_id,
            'quantity', oi.quantity,
            'productName', p.name,
            'productPrice', p.price
          )
        ) AS items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE o.user_id = $1
      GROUP BY o.id
      ORDER BY o.order_date DESC
    `
    : `
      SELECT 
        o.*, 
        json_agg(
          json_build_object(
            'productID', oi.product_id,
            'quantity', oi.quantity,
            'productName', p.name,
            'productPrice', p.price
          )
        ) AS items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      GROUP BY o.id
      ORDER BY o.order_date DESC
    `;
  
    const values = userId ? [userId] : [];
  
    const result = await db.query(query, values);
  
    // Convert items JSON from string to array, handle empty items case
    return result.rows.map(row => ({
      id: row.id,
      userID: row.user_id,
      status: row.status,
      orderDate: row.order_date,
      estimatedTimeMinutes: row.estimated_time_minutes,
      items: row.items[0]?.productID ? row.items : [],  // if no items, json_agg returns [null]
    }));
  }