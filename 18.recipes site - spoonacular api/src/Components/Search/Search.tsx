import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Card from '../Card/Card'
import { useGlobalContext } from '../../context'
import { useNavigate } from 'react-router-dom'
const url = 'https://api.spoonacular.com/recipes'


const Search = () => {
    // const { searchResults, fetchRecipesByQuery } = useGlobalContext();
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState<string>("")
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/search/'+input)
        // fetchRecipesByQuery(input);
    }

    return (
        <div className='section'>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <FaSearch />
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default Search