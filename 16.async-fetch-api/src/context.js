import React, { useState, useContext } from "react";
import sublinks from "./Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [results, setResults] = useState([])

  return (
    <AppContext.Provider
      value={{
       results,
       setResults
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
