import React, { createContext, useContext, useState } from "react";

const CartContainer = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const deleteCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  return (
    <CartContainer.Provider value={{ cart, addCart, deleteCart, decrease, increase }}>
      {children}
    </CartContainer.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContainer);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
};
// Correct export in Cartcontainer.js
// export { CartProvider as Cartpro };
