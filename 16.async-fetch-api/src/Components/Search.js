import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [query, setQuery] = useState("");
  const { setResults, results } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setResults(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);
  console.log(results);
  return (
    <div className="search">
      <div className="search-holder">
        <input
        placeholder="search for drinks"
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
