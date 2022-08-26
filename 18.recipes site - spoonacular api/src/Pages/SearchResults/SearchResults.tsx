import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '../../Components/Card/Card'
const url = 'https://api.spoonacular.com/recipes'


const SearchResults = () => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState([])

    const fetchRecipesByQuery = async (query: string | undefined) => {
        try {
            const response = await fetch(`${url}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`)
            const data = await response.json()
            console.log(data.results)
            setSearchResults(data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchRecipesByQuery(query);
    }, [query])

    return (
        <div className='section'>
            <h3 className='section-title'>Search word: {query}</h3>
            <div className="cards">
                <Splide
                    options={{
                        perPage: 3,
                        gap: '1rem',
                        pagination: false,
                        drag: "free",
                        getPadding: "50px"
                    }}>
                    {searchResults.map(recipe => {
                        const { id } = recipe
                        return <Card key={id} recipe={recipe} />
                    })}
                </Splide>
            </div>
        </div>
    )
}

export default SearchResults