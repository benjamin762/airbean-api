import { Product } from "./product";

//     CART_ITEMS {
//         int user_id FK "Foreign key for the user owning the cart"
//         int product_id FK "Foreign key for the product added to cart"
//         int quantity "Number of the product in the cart"
//     }

export interface Cart {
    userId: number;
    products: ProductWithQuantity[];
}

export interface ProductWithQuantity extends Product {
    quantity: number;
}