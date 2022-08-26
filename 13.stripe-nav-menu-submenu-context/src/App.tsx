import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import sublinks from './Data';
import MobileMenu from './Components/MobileMenu';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';



function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <MobileMenu />

    </div>
  );
}

export default App;
