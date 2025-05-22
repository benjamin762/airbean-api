// shared/order.ts
export type OrderStatus = 'pending' | 'completed' | 'cancelled'; // example statuses

// ✅ Used on the frontend and for request bodies
export interface OrderInput {
  userID: number;
  status: OrderStatus;
  orderDate: Date;
  estimatedTimeMinutes: number;
  items: OrderItemInput[];
}

export interface OrderItemInput {
  productID: number;
  quantity: number;
}

// ✅ Used on the frontend
export interface OrderResponse {
  id: number;
  items: OrderItemResponse[];
}

export interface OrderItemResponse {
  id: number;
  orderDate: Date;
  estimatedTimeMinutes: number;
  status: OrderStatus;
  orderID: number;
  productID: number;
  quantity: number;
  productName: string;
  productPrice: number;
}

// ✅ Used only on backend (or shared if needed in frontend after creation)
export interface Order extends OrderInput {
  id: number;
  items: OrderItem[];
}

export interface OrderItem extends OrderItemInput {
  orderID: number;
}