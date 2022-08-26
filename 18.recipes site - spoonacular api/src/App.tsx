import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Styles/App.css';
//import pages
import Home from "./Pages/Home/Home"
import Cuisine from "./Pages/Cuisine/Cuisine"
import SearchResults from './Pages/SearchResults/SearchResults';

//import components
import Category from './Components/Category/Category';
import Search from './Components/Search/Search';
import RecipeDetails from './Pages/RecipeDetails/RecipeDetails';





function App() {


  return (
    <div className="App">
      <Router>
        <Search/>
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} /> 
          <Route path="/search/:query" element={<SearchResults />} />       
          <Route path="/details/:id" element={<RecipeDetails />} />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
