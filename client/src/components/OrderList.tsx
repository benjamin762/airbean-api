import React, { useEffect, useState } from "react";
import { fetchOrders } from "../services/orderService";
import { OrderResponse } from "../../../shared/order";


export default function OrderList() {
  const [orders, setOrders] = useState<OrderResponse[]>([]);
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
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => {
          const totalOrderPrice = order.items.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
          return (
            <li
              key={order.id}
              style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}
            >
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Status:</strong> {order.items[0].status}
              </p>
              <p>
                <strong>Order Date:</strong> {new Date(order.items[0].orderDate).toLocaleString()}
              </p>

              <h4>Items:</h4>
              <section style={{ padding: "1rem" }}>
                <ul>
                  {order.items && order.items.length > 0 ? (
                    order.items.map((item) => (
                      <li key={item.productID}>
                        <strong>{item.productName}</strong> — Quantity: {item.quantity}, Price:{" "}
                        {item.productPrice.toFixed(2)} SEK
                      </li>
                    ))
                  ) : (
                    <li>No items found</li>
                  )}
                </ul>
              </section>
              <p>
                <strong>Total Order Price:</strong> {totalOrderPrice.toFixed(2)} SEK
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

