import React from 'react'
import { useState } from 'react'
import styles from './_style.module.scss'
import buttonsList from '../../Data'
import Button from '../Button'

interface IProps {
  action?: string | undefined;
  btnValue: JSX.Element | number | string;

}

const Calculator = () => {
  const [buttons, setButtons] = useState<IProps[]>(buttonsList);
  const [inputValue, setInputValue] = useState<number[]>([0])
  const [mathSymbol, setMathSymbol] = useState<JSX.Element | undefined>()
  const [inputValue2, setInputValue2] = useState<number[]>([])
  const [secondState, setSecondState] = useState<boolean>(false)
  const [action, setAction] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)


  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__display}>
        {/* <input type="number" className={styles.calculator__display__input} /> */}
        <div className={styles.calculator__display__first_input}>
          {inputValue}
        </div>
        <div className={styles.calculator__display__second_input}>
          {inputValue2}
        </div>
        <div className={styles.calculator__display__mathSymbol}>
          {mathSymbol}
        </div>
        <div className={styles.calculator__display__result}>
          {result}
        </div>
      </div>
      <div className={styles.calculator__buttons}>
        {buttons.map((btn, index) => {
          return <Button
            key={index}
            btn={btn}
            inputValue={inputValue}
            setInputValue={setInputValue}
            inputValue2={inputValue2}
            setInputValue2={setInputValue2}
            mathSymbol={mathSymbol}
            setMathSymbol={setMathSymbol}
            secondState={secondState}
            setSecondState={setSecondState}
            result={result}
            setResult={setResult}
            action={action}
            setAction={setAction}
          />
        })}
      </div>
    </div>
  )
}

export default Calculator