import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import './ProductList.css';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {products
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong> - {p.price.toFixed(2)} SEK
              <p>{p.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;

