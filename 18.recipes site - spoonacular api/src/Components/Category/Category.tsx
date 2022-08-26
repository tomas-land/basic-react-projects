import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div className='section'>
      <div className="categories">
        <NavLink className="category-link" to='/cuisine/Italian'>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink className="category-link" to='/cuisine/American'>
          <FaHamburger />
          <h4>American</h4>
          </NavLink>
        <NavLink className="category-link" to='/cuisine/Korean'>
          <GiChopsticks />
          <h4>Korean</h4>
          </NavLink>
        <NavLink className="category-link" to='/cuisine/Thai'>
          <GiNoodles />
          <h4>Thai</h4>
          </NavLink>
      </div>
    </div>
  )
}

export default Category