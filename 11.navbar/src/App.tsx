import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import {links,social} from './Data';
import Navbar from './Components/Navbar';

// interface IState {
//   jobs: {
//     id: number
//     order: number
//     title: string
//     dates: string
//     duties: []
//     company: string

//   }[]
// }

function App() {
  return (
    <div className="App">
   <Navbar />
    </div>
  );
}

export default App;
