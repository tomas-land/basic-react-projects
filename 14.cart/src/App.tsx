import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';
import Navbar from './Components/Navbar';
import Cart_Container from './Components/Cart_Container';
import Shop from './Components/Shop';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop/>
      <Cart_Container />


    </div>
  );
}

export default App;
