import React from "react";
import { useGlobalContext } from "../context";

const CocktailsList = () => {
  const { results } = useGlobalContext();
  return (
    <div className="cocktails-section">
      <ul className="cocktails-list">
        {results.length > 0
          ? results.map((drink) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strGlass,
                strAlcoholic,
              } = drink;
              return (
                <li className="card" key={idDrink}>
                  <img className="card-image" src={strDrinkThumb} alt="" />
                  <h4>{strDrink}</h4>
                  <h5>{strGlass}</h5>
                  <p>{strAlcoholic}</p>
                  <button className="btn btn-details">DETAILS</button>
                </li>
              );
            })
          : "no drinks"}
      </ul>
    </div>
  );
};

export default CocktailsList;
