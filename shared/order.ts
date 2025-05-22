// shared/order.ts
import { Product } from "./product";
// ✅ Used on the frontend and for request bodies
export interface OrderInput {
    userID: number;
    status: string;
    orderDate: Date;
    estimatedTimeMinutes: number;
    items: OrderItemInput[];
  }
  
  export interface OrderItemInput {
    productID: number;
    quantity: number;
  }
  
  // ✅ Used only on backend (or shared if needed in frontend after creation)
  export interface Order extends OrderInput {
    id: number;
    items: OrderItem[];
  }
  
  // Used for OrderList component
  export interface OrderItem extends OrderItemInput {
    orderID: number;
    productName: string;
    productPrice: number;
  }