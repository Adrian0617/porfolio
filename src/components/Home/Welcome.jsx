import React, { useRef } from 'react'
import '../../styles/home.css'
import { Link } from 'react-router-dom'

export const Welcome = () => {

  return (
    <div className='welcome-div'>
        <div>
        <h1 className='title'>Welcome to my Home store</h1>
        <p>Here you can to find many products in an only place</p>
        <Link to='/shop'>
            See products 
        </Link>

        </div>
    </div>
  )
}
