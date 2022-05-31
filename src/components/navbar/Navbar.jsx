import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Link to='/'><img src="./assets/Logo.svg" alt="" className='logo'/></Link>
        </div>
        <div className="hamburger">|||</div>
    </nav>
  )
}

export default Navbar