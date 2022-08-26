import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';

interface IState {
  jobs: {
    id: number
    order: number
    title: string
    dates: string
    duties: []
    company: string

  }[]
}

function App() {
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
