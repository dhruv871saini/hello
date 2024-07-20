
import React, { useContext } from "react";
import { useCart } from "./Cartcontainer";
import { useTheme } from "../theme/Themes";
import "./cart.css"
// import Cartcontainer from "./Cartcontainer";

const Cart = () => {
  const { cart, deleteCart, decrease, increase } = useCart();

  const total = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  };
  // chat gpt 
  const{darkMode}=useTheme();

  return (
    <div className={darkMode? `dark-theme`:`light-theme`}>
      <h2>Cart</h2>
      <div className={darkMode?`dark-theme`:`light-theme`}>
      <table  className="table table-striped ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Buttons</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody >
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => increase(index)}>+</button>{" "}
                <button onClick={() => decrease(index)}>-</button>
              </td>

              <td>${(item.price * item.quantity)}</td>
              <td>
                <button onClick={() => deleteCart(index)}>Delete</button>
              {console.log(item.price, item.quantity)} 
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: "right" }}>Total:</td>
            <td>${total()}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Cart;
