import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">GOKE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/modupe-akanni/"><FaLinkedin/></a>
        <a href="https://instagram.com/adegoke_akanni"><FiInstagram/></a>
        <a href="https://twitter.com/aka_goke"><IoLogoTwitter/></a>
        <a href="https://github.com/Goketech"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Modupe Akanni. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer