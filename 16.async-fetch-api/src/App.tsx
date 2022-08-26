import React from 'react';
import { useState } from 'react';
import CocktailsList from './Components/CocktailsList';
import Header from './Components/Header';
import Search from './Components/Search';
import './Styles/App.css';




function App() {


  return (
    <div className="App">
      <Header />
      <Search />
      <CocktailsList />

    </div>
  );
}

export default App;
