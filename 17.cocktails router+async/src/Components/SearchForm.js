import React from "react";
import { useState, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <div className="search-section">
      <form className="search-form">
        <input
          type="text"
          ref={searchValue}
          onChange={searchCocktail}
          placeholder="search for drinks.."
        />
      </form>
    </div>
  );
};

export default SearchForm;
