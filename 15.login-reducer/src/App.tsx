import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';
import Login from './Components/Login'
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
   <Login />
    </div>
  );
}

export default App;
