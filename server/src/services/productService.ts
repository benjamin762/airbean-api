// server/src/service/productService.ts
// contains DB quering functions
import { Product } from '../../../shared/product';
import db from '../config/db'; // your DB connection module (example)

export async function fetchAllProducts(): Promise<Product[]> {
  // Example using some DB client, e.g. with SQL:
  const result = await db.query('SELECT * FROM products');
  return result.rows;

}