import React, { useEffect } from 'react';
import { useState } from 'react';
import './Styles/App.css';
import Data from './Data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className="App">
      <section className="review-section">
        <div className="review-title">
          <h1><span>/</span>Reviews</h1>
        </div>
        <div className="review-slider">
          {
            people.map((person, personIndex) => {
              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide'
              }
              if (personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)) {
                position = 'prevSlide'
              }

              const { id, image, name, title, quote } = person;
              return <article key={id} className={`slide ${position}`} >
                <img src={image} alt="" className='slide-image' />
                <h2 className='slide-name'>{name}</h2>
                <p className='slide-title'>{title}</p>
                <p className="slide-quote">{quote}</p>
              </article>
            })
          }
          <button className="slider-btn left" onClick={() => setIndex(index - 1)}><FaChevronLeft /></button>
          <button className="slider-btn right" onClick={() => setIndex(index + 1)}><FaChevronRight /></button>
        </div>
      </section>
    </div>
  );
}

export default App;
