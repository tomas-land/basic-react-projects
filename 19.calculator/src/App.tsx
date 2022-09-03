import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from './Components/Calculator';
import './Styles/App.css';






function App() {


  return (
    <div className="App">
     <Calculator/>
    </div>
  );
}

export default App;
