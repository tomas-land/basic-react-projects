import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Styles/App.css';
//import pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import SingleCocktail from "./Pages/SingleCocktail"
import Error from "./Pages/Error"
//import components
import Navbar from './Components/Navbar';




function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
