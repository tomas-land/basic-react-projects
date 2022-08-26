import React from "react";
import CocktailsList from "../Components/CocktailsList";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <div className="home-section section-center">
      <SearchForm />
      <CocktailsList />
    </div>
  );
};

export default Home;
