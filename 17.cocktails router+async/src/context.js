import React, { useState, useContext, useEffect } from "react";
import sublinks from "./Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setCocktails(drinks);
        setLoading(false);
      } else {
        setCocktails([]); // if null set cocktails to empty array
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        results,
        setResults,
        cocktails,
        setCocktails,
        searchTerm,
        setSearchTerm,
        fetchDrinks,
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
