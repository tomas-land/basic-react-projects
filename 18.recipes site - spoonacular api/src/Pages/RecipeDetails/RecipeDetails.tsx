import { stringify } from 'querystring'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { IRecipe } from '../../interfaces'
const url = 'https://api.spoonacular.com/recipes/'


const RecipeDetails = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState<any>({});
    const [activeBtn, setActiveBtn] = useState('instructions')
    const fetchRecipeById = async (id: string | undefined) => {
        try {
            const response = await fetch(`${url}${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json()
            setRecipe(data)
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchRecipeById(id)
        console.log(recipe.extendedIngredients)

    }, [id])

    return (
        <div className='section'>
            <div className="wrapper">
                <div className="image-container">
                    <img src={recipe.image} alt="" />
                </div>
                <div className="info">
                    <h2 className='info-title'>{recipe.title}</h2>
                    <div className="info-healthy-bar">
                        <h3 className="info-hscore badge">Health score: {recipe.healthScore}</h3>
                        <h3 className='info-gluten badge'>Gluten free: {recipe.glutenFree ? 'Yes' : 'No'}</h3>
                    </div>
                    <div className="info-btn-container">
                        <button className={activeBtn === 'instructions' ? 'active' : ''} onClick={() => setActiveBtn('instructions')}>Instructions</button>
                        <button className={activeBtn === 'ingredients' ? 'active' : ''} onClick={() => setActiveBtn('ingredients')}>Ingredients</button>
                    </div>
                    <div className='info-wrapper'>
                        {activeBtn === 'instructions' && (
                            <div>
                                instructions
                                <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
                                <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
                            </div>)
                        }
                        {activeBtn === 'ingredients' && (
                            <ul>{recipe.extendedIngredients.map((item:any)=>{
                            return <li key={item.id}>{item.name}</li>
                            })}</ul>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails