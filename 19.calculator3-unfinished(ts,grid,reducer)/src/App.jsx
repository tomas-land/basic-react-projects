import { useState, useEffect, useReducer } from "react";
import { FaBackspace } from "react-icons/fa";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { RiDivideFill } from "react-icons/ri";
import { FiPercent } from "react-icons/fi";
import "./Styles/App.css";
import DigitButton from "./Components/DigitButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  console.log(state);
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}`
      };
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer,{}
  );
  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <div className="buttons">
          <button className="btn span-two btn-oper">CA</button>
          <button className="btn btn-oper">
            <FaBackspace />
          </button>
          <button className="btn btn-oper">
            <RiDivideFill />
          </button>
          <DigitButton digit="7" dispatch={dispatch}/>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn btn-oper">
            <VscClose />
          </button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn btn-oper">
            <CgMathPlus />
          </button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn btn-oper">
            <CgMathMinus />
          </button>
          <button className="btn">.</button>
          <button className="btn">0</button>
          <button className="btn span-two">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
