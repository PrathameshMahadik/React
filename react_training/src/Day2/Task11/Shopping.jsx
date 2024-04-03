/* 11.Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart. */
import React, { createContext } from 'react';
import CartProvider from './CartProvider';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const CartContext = createContext();

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];
export{CartContext,products};

const Shopping = () => {
  return (
    <CartProvider>
      <div className="App">
        <ProductList />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};

export default Shopping;
