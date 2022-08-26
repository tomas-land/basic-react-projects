import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IRecipe } from '../../interfaces';
import { Link } from 'react-router-dom';

const Card: React.FC<IRecipe> = ({ recipe }: IRecipe) => {

    return (

        <SplideSlide>
            <Link to={"/details/" + recipe.id}>
                <div className="card">
                    <img className="card-image" src={recipe.image} alt="" />
                    <div className='card-gradient'></div>
                    <div className='card-title'><span>{recipe.title}</span></div>
                </div>
            </Link>
        </SplideSlide>
    )
}

export default Card