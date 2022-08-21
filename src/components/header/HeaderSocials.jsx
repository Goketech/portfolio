import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/modupe-akanni-236377235/' target='_blank'><BsLinkedin/></a>
        <a href='https://www.github.com/Goketech' target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/aka_goke?t=a61mXAoPDZsPWjzxqTWiWg&s=09" target='_blank'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials