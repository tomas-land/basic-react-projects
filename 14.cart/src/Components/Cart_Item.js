import React from "react";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Data from "../Data";

const Cart_Item = ({ item }) => {
  const {
    removeItem,
    setCartItems,
    cartItems,
    increaseItemAmount,
    decreaseItemAmount,
    setTotalPrice,
  } = useGlobalContext();
  const { id, title, img, price, amount } = item;
  //   const [itemAmount, setItemAmount] = useState(1);

  //   const updateQuantity = () => {
  //     cartItems.map((item) => {
  //       if (item.id === id) {
  //         setCartItem([{ ...item, amount: itemAmount }]);
  //       }
  //     });
  //   };
  useEffect(() => {
    if (item.amount === 0) {
      {
        removeItem(id);
      }
    }
  }, [cartItems, amount]);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems, amount]);
  return (
    <li className="cart-item">
      <img src={img} alt="" className="image" />
      <div className="cart-item-info">
        <h5>{title}</h5>
        <p>$ {price}</p>
        <button className="btn-remove" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="cart-item-counter">
        <button className="btn-increase" onClick={() => increaseItemAmount(id)}>
          <FaChevronUp />
        </button>
        <div className="counter">{amount}</div>
        <button className="btn-decrease" onClick={() => decreaseItemAmount(id)}>
          <FaChevronDown />
        </button>
      </div>
    </li>
  );
};

export default Cart_Item;
