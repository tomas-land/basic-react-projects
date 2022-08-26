import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Loader from '../../Components/Loader';
import Card from '../../Components/Card/Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const url = 'https://api.spoonacular.com/recipes'

const Cuisine = () => {
    const { type } = useParams();
    const [cuisine, setCuisine] = useState<any>([])
    const [loading, setLoading] = useState(false)

    //localStroage????????????????

    const fetchRecipesByType = async (type:string | undefined) => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`)
            const recipes = await response.json()
            console.log(recipes.results)
            setCuisine(recipes.results)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRecipesByType(type)
    }, [type])
    return (
        <div className='section'>
            <Loader loading={loading}/>
            <h3 className='section-title'>{type} dishes</h3>
      <div className="cards">
        <Splide 
          options={{
            perPage: 3,
            gap: '1rem',
            pagination: false,
            drag: "free",
            getPadding:"50px"
          }}>

          {cuisine.map((recipe:any) => {
            const { id } = recipe
            return <Card key={id} recipe={recipe} />
          })}
        </Splide>
      </div>
        </div>
    )
}

export default Cuisine