import React from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';
import InputHolder from './Components/InputHolder';
import TextsList from './Components/TextsList';

interface IState {
  // jobs: {
  //   id: number
  //   order: number
  //   title: string
  //   dates: string
  //   duties: []
  //   company: string

  // }[]

}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (count <= 0) {
      setCount(0)
    }
    if (count > text.length) {
      setCount(text.length)
    }
    setText(Data.slice(0, count));
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
        <button className='btn' type='submit'>generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>

  )












  //   const [texts, setTexts] = useState<string[]>(['ppp', 'lll'])
  //   const [words, setWords] = useState(Words)

  //   const getRandomWords = (array: Array<string>, number: number) => {
  //     const shuffled = [...array].sort(() => 0.5 - Math.random());
  //     return shuffled.slice(0, number); // array
  //   }

  //   const generateTexts = (numberOfParag: number, numberOfWords: number) => {
  //     let randomWords = (getRandomWords(words, numberOfWords).join(' ')); //string
  //     console.log(randomWords.padEnd(10,''));
  //     console.log(randomWords.lastIndexOf('a'));
  //     console.log((randomWords.repeat(2)).split(' '));
  //     // let newParagraphs = (randomWords.repeat(numberOfParag)).split(',');
  //     // console.log(newParagraphs);
  //     // newParagraphs.map((newParagraph) => {
  //     // return  setTexts(()=>[...texts, newParagraph]);
  //     // })
  //     console.log(('a b c').split(' '));
  //   }

  //   // console.log(getRandomWords(words, 3));
  //   return (
  //     <div className="App">
  //       <h1 className='title'>Tired of boring lorem ipsum?</h1>
  //       <InputHolder generateTexts={generateTexts} />
  //       <TextsList texts={texts} />
  //     </div>
  //   );
}

export default App;
