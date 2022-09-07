import React from 'react';
import { useState, useEffect } from 'react';
import { FaBackspace } from "react-icons/fa";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { RiDivideFill } from "react-icons/ri";
import { FiPercent } from "react-icons/fi";
import './Styles/App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [result, setResult] = useState('')
  const ops = ["/", "*", "+", "-", "."]

  const addToInput = (value: string) => {
    // if (inputValue.includes('.') && value === '.') return;
    if (result) {
      setInputValue(result + value)
      setResult('')
    }
    if (
      ops.includes(value) && inputValue === '' ||
      ops.includes(value) && ops.includes(inputValue.slice(-1))
    ) { return }
    setInputValue(inputValue + value)
  }

  const cancelAll = () => {
    setInputValue('');
    setResult('');
  }

  const getResults = () => {
    setResult(eval(inputValue))
    setInputValue('')
  }
  const deleteLastValue = () => {
    setInputValue(inputValue.slice(0, - 1))
  }
  // const getPercents =() => {
  //   setResult()
  // }
  // useEffect(() => {
  //   
  // }, [addToInput])

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="input-value">{inputValue || "0"}</div>
          <div className="results">{result || "0"}</div>
        </div>
        <div className="buttons">
          <button className='btn btn-oper' onClick={cancelAll}>C</button>
          <button className='btn btn-oper' onClick={deleteLastValue} ><FaBackspace /></button>
          <button className='btn btn-oper'><FiPercent /></button>
          <button className='btn btn-oper' onClick={() => addToInput("*")}><VscClose /></button>
          <button className='btn' onClick={() => addToInput("7")}>7</button>
          <button className='btn' onClick={() => addToInput("8")}>8</button>
          <button className='btn' onClick={() => addToInput("9")}>9</button>
          <button className='btn btn-oper' onClick={() => addToInput("/")}><RiDivideFill /></button>
          <button className='btn' onClick={() => addToInput("4")}>4</button>
          <button className='btn' onClick={() => addToInput("5")}>5</button>
          <button className='btn' onClick={() => addToInput("6")}>6</button>
          <button className='btn btn-oper' onClick={() => addToInput('+')} ><CgMathPlus /></button>
          <button className='btn' onClick={() => addToInput("1")}>1</button>
          <button className='btn' onClick={() => addToInput("2")}>2</button>
          <button className='btn' onClick={() => addToInput("3")}>3</button>
          <button className='btn btn-oper' onClick={() => addToInput("-")}><CgMathMinus /></button>
          <button className='btn' onClick={() => addToInput(".")}>.</button>
          <button className='btn' onClick={() => addToInput("0")}>0</button>
          <button className='btn span-two' onClick={getResults}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
