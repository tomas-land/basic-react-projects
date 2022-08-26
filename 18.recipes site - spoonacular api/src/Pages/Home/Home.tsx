import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Loader from '../../Components/Loader';
import { useGlobalContext } from '../../context';
import { motion } from 'framer-motion';

const url = 'https://api.spoonacular.com/recipes'

// interface IRecipe {
//   recipe: {
//       image: string,
//       title: string
//   }[]

// }
const Home = () => {
  // const { searchResults } = useGlobalContext()
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async () => {
    setLoading(true)
    const myLocalStorage = localStorage.getItem("popular")
    if (myLocalStorage) {
      setPopular(JSON.parse(myLocalStorage))
    } else {
      try {
        const response = await fetch(`${url}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
        const data = await response.json()
        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
  }


  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <motion.div className='section' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Loader loading={loading} />
      <h3 className='section-title'>Popular picks</h3>
      <div className="cards">
        <Splide
          options={{
            perPage: 3,
            gap: '1rem',
            pagination: false,
            drag: "free",
            getPadding: "50px"
          }}>
          {
            // searchResults ?  
            //   (searchResults.map((recipe) => {
            //     const { id } = recipe
            //     return <Card key={id} recipe={recipe} />
            //   }))
            //   :
            //   (
            popular.map(recipe => {
              const { id } = recipe
              return <Card key={id} recipe={recipe} />
            })
            // )

          }

        </Splide>
      </div>


    </motion.div>
  )
}

export default Home