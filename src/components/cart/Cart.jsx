
import React, { useContext } from "react";
import Cartcontainer from "./Cartcontainer";

const Cart = () => {
  const { cart, deleteCart, decrease, increase, total } = useContext(Cartcontainer);

  return (
    <div>
      <h2>Cart</h2>
      <table className="table table-striped ">
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
        <tbody>
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
  );
};

export default Cart;
