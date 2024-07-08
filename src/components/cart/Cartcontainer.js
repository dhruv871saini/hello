import React, { createContext, useState } from "react";

const Cartcontainer = createContext();

export const Cartpro = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, {...item,quantity:1}]);
  };

  const deleteCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increase =(index)=>{
    const newCart = [...cart]
    newCart[index].quantity++
    setCart(newCart)
  }

  const decrease =(index)=>{
  const newCart =[...cart]
  if(newCart[index].quantity>1){
    newCart[index].quantity--
    setCart (newCart)
  }
  }

    const total =()=>{
      let total = 0
      cart.forEach((item)=>{
        return  total += item.price * item.quantity
        })
    }
  return (
    <Cartcontainer.Provider value={{ cart, addCart, deleteCart ,decrease,increase,total }}>
      {children}
    </Cartcontainer.Provider>
  );
};

// export  { Cartpro };
export default Cartcontainer;
