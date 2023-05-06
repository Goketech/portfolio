import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/modupe.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Modupe Akanni</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img className='slant-image' src={ME} alt="ME" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header