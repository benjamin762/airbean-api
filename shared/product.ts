/* PRODUCTS {
        int id PK
        string name
        int price
        string description
    } */

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}