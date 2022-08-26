import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Cart_Item from "./Cart_Item";

const Cart_Container = () => {
  const { cartItems, clearCart, totalPrice, setTotalPrice } =
    useGlobalContext();

  const totalSum = cartItems
    .reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0).toFixed(2);

  //    const totalSumTax = (totalSum * 0.21).toFixed(2);
  //    const shippingPrice = totalSum > 2000 ? 0 : 50;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Bag</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-items">
          {cartItems.map((item) => {
            return <Cart_Item item={item} key={item.id} />;
          })}
        </ul>
      ) : (
        <h4>No cart items</h4>
      )}
      <hr />
      <div className="cart-total">
        <h4>Total</h4>
        <h4>$ {totalSum}</h4>
      </div>
      <button className="btn-clear" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart_Container;
