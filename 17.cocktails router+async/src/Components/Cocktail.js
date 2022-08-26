import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  const {
    idDrink: id,
    strDrink: name,
    strCategory: category,
    strAlcoholic: alcoholic,
    strDrinkThumb: image,
    strIngredient1: ingredient1,
    strIngredient2: ingredient2,
    strInstructions: instructions,
  } = drink;

  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <h4>{name}</h4>
      <h5>{category}</h5>
      <p>{alcoholic}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-details">
        DETAILS
      </Link>
    </div>
  );
};

export default Cocktail;
