import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { openNav, closeNav } from '../../modules/header'


const Header = (props) => {


  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <div className="logoBox">
        <span><Link id='logo' to="/">{props.logoText}</Link></span>
      </div>
      <div className="navBox">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="projects">Projects</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="burgerMenu">
        <span className='burgerBtn' onClick={() => { setIsMobile(!isMobile); isMobile ? closeNav() : openNav() }}>
          <div className="burger burger-one"></div>
          <div className="burger burger-two"></div>
        </span>
      </div>
    </header>
  )
}

Header.defaultProps = {
  logoText: "Logo"
}


export default Header



// Creativity is seeing what others see and thinking what no one else ever thought.