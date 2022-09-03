import React from 'react'
import styles from './_style.module.scss'
import buttons from '../../Data'
import { useEffect } from 'react'
interface IProps {
  btn: {
    btnAction?: string | undefined;
    btnValue: JSX.Element | string | number;
  };
  inputValue: number[];
  setInputValue: (arg0: number[]) => void;
  inputValue2: number[];
  setInputValue2: (arg0: number[]) => void;
  mathSymbol: JSX.Element | undefined;
  setMathSymbol: (arg0: any) => void;
  secondState: boolean;
  setSecondState: (arg0: boolean) => void;
  result: number | null;
  setResult: (arg0: number | null) => void;
  action: string;
  setAction: (arg0: string) => void;
}

const Button = ({ btn, inputValue, setInputValue, mathSymbol, setMathSymbol, secondState, setSecondState,
  inputValue2, setInputValue2, result, setResult, action, setAction }: IProps) => {
  const { btnAction, btnValue } = btn;

  const handleClick = (value: JSX.Element | string | number, btnAction: string | undefined) => {
    switch (btnAction) {
      case 'cancelAll':
        setInputValue([0])
        setInputValue2([])
        setMathSymbol(undefined)
        setResult(null)
        setSecondState(false);
        return;
      case 'cancelEntity':
        if (!secondState) {
          setInputValue([0])
        } else {
          setInputValue2([])
        }
        return;
      case 'backspace':
        let newInputValue = null;
        if (!secondState) {
          newInputValue = setInputValue([...inputValue.slice(0, inputValue.length - 1)]) // takes values from 0 index to last index - 1
        } else {
          newInputValue = setInputValue2([...inputValue2.slice(0, inputValue2.length - 1)])
        }
        return newInputValue;
      case 'multiply':
        setSecondState(true);
        setMathSymbol(value);
        setAction('multiply')
        return;
      case 'divide':
        setSecondState(true);
        setMathSymbol(value);
        setAction('divide')
        return;
      case 'add':
        setSecondState(true);
        setMathSymbol(value);
        setAction('add')
        return;
      case 'subtract':
        setSecondState(true);
        setMathSymbol(value);
        setAction('subtract')
        return;
      case 'result':
        setInputValue([]);
        setInputValue2([]);
        setMathSymbol('');
        return getResults(action, inputValue, inputValue2);
      default:
        if (typeof value === 'number') {
          if (!secondState) {
            return setInputValue([...inputValue, value])
          } else {
            return setInputValue2([...inputValue2, value])
          }
        }
      }
    }

  const getResults = (action: string, inputValue: number[], inputValue2: number[]): void => {
    const a = Number(inputValue.join(""))
    const b = Number(inputValue2.join(""))
    switch (action) {
      case 'multiply':
        const multipliedValues = a * b;
        return setResult(multipliedValues);
      case 'divide':
        const dividedValues = a / b;
        return setResult(dividedValues);
      case 'add':
        const addedValues = a + b;
        return setResult(addedValues);
      case 'subtract':
        const subtractedValues = a - b;
        return setResult(subtractedValues);
    }
  }

  return (
    <button className={styles.button} onClick={() => handleClick(btnValue, btnAction)}>
      {btnValue}
    </button>
  )
}

export default Button