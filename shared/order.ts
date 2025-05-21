// shared/order.ts
export interface Order {
    id: string;
    items: { name: string; quantity: number }[];
    createdAt: string;
  }
  
  export interface OrderItem {
    name: string;
    quantity: number;
  }  