import React, { useEffect, useState } from "react";
import { fetchOrders } from "../services/orderService";

interface Order {
  id: number;
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrderData() {
      try {
        const orders = await fetchOrders();
        setOrders(orders);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchOrderData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.id}</li>
        ))}
      </ul>
    </div>
  );
}

