import React, { useState, useEffect } from "react";
import Cocktail from "../Components/Cocktail";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log(id);
    async function getCocktail() {
      try {
        const resp = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await resp.json();
        const { drinks } = data;
        if (drinks) {
          setLoading(false);
          const {
            strAlcoholic: alcoholic,
            strInstructions: instructions,
            strDrinkThumb: image,
          } = drinks[0];
          const newCocktail = {
            alcoholic,
            instructions,
            image,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);
  if (!cocktail) {
    return <h2 className="section-center">Not found</h2>;
  }
  const { alcoholic, instructions, image } = cocktail;
  return (
    <div className="section-center single-cocktail">
      <ClipLoader color={"green"} loading={loading} />
      <div className="card">
        <img className="card-image" src={image} alt="" />
        <p>{alcoholic}</p>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default SingleCocktail;
