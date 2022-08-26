import React from "react";
import { useGlobalContext } from "../context";
import Data from "../Data";
const Shop = () => {
  const { addToCart } = useGlobalContext();
  return (
    <div className="shop">
      <ul className="shop-items">
        {Data.map((item) => {
          const { id, title, img, price, amount } = item;
          return (
            <li className="shop-item" key={id}>
              <img src={img} alt="" className="image" />
              <div className="cart-item-info">
                <h5>{title}</h5>
                <p>$ {price}</p>
                <button className="btn-add" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shop;
