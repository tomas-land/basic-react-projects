import React, { useState, useContext, useEffect } from "react";
import sublinks from "./Data";
const url = 'https://api.spoonacular.com/recipes'

const INITIAL_STATE = {
  searchResults: [],
}

interface IProps {
  children: JSX.Element | JSX.Element[]; // React.ReactNode

}
export type ContextType = {
  searchResults: {
    image: string;
    title: string;
    id:string;
  }[];
  setSearchResults: any;
  fetchRecipesByQuery: (query: string) => void;
  // recipe:{
  //   id:string;
  // }
}
const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider = ({ children }: IProps) => {
  const [searchResults, setSearchResults] = useState([]);

  const fetchRecipesByQuery = async (query: string) => {
    try {
      const response = await fetch(`${url}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`)
      const data = await response.json()
      console.log(data.results)
      setSearchResults(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        fetchRecipesByQuery
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
