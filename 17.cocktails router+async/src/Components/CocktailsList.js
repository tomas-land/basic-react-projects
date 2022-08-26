import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import ClipLoader from "react-spinners/ClipLoader";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  const { loading, cocktails, fetchDrinks, searchTerm } = useGlobalContext();

  if (loading) {
    return <ClipLoader color={"green"} loading={loading} />;
  }

  if (cocktails.length < 1) {
    return <h3 className="cocktails-title">No cocktails found</h3>;
  }

  console.log(cocktails);
  return (
    <div className="section-center cocktails-section">
      <h2 className="cocktails-title">Cocktails</h2>
      <div className="cocktails-list">
        {cocktails.map((drink) => {
          return <Cocktail drink={drink} key={drink.idDrink} />;
        })}
      </div>
    </div>
  );
};

export default CocktailsList;
