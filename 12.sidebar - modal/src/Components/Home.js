import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext, useGlobalContext } from '../context'
import {FaBars} from 'react-icons/fa'

const Home = () => {
    const {openSidebar, openModal} = useContext(AppContext);
    
  return (
    <main>
        <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
        </button>
        <button onClick={openModal}>show modal</button>
        </main>
  )
}

export default Home