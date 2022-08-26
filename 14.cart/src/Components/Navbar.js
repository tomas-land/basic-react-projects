import React from "react";
import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { cartItems } = useGlobalContext();
  
  const totalAmount = cartItems.reduce((total, item) => {
        return total + item.amount;
      }, 0);
     
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-cart">
          <FaShoppingBag />
          <div className="circle">
            <div className="counter">{totalAmount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
