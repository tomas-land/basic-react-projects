import React, { useState, useContext, createFactory } from "react";
import Data from "./Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const clearCart = () => {
    setCartItems([]);
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const addToCart = (product) => {
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existItem, amount: existItem.amount + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };
  
  const increaseItemAmount = (id) => {
    const targetItem = cartItems.find((item) => item.id === id);
    if (targetItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...targetItem, amount: targetItem.amount + 1 }
            : item
        )
      );
    }
  };
  const decreaseItemAmount = (id) => {
    const targetItem = cartItems.find((item) => item.id === id);
    if (targetItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...targetItem, amount: targetItem.amount - 1 }
            : item
        )
      );
    }
  };
  return (
    <AppContext.Provider
      value={{
        setCartItems,
        cartItems,
        clearCart,
        removeItem,
        totalPrice,
        setTotalPrice,
        totalAmount,
        setTotalAmount,
        increaseItemAmount,
        decreaseItemAmount,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
