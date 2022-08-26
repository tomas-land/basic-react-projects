import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';
import Home from './Components/Home';
import Modal from './Components/Modal';

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
   <Home />
   <Modal />
    </div>
  );
}

export default App;
