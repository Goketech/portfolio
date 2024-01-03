import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsNewspaper} from 'react-icons/bs'
import { useState, useEffect } from 'react'

const sections = [
  { id: '#', icon: <AiOutlineHome /> },
  { id: '#about', icon: <AiOutlineUser /> },
  { id: '#experience', icon: <BiBook /> },
  { id: '#blog', icon: <BsNewspaper /> },
  { id: '#contact', icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = sections.reduce((positions, section) => {
        positions[section.id] = document.querySelector(section.id).offsetTop;
        return positions;
      }, {});

      const scrollPosition = window.scrollY;
      let activeSection = '#';

      for (const [section, position] of Object.entries(sectionPositions)) {
        if (scrollPosition >= position) {
          activeSection = section;
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      {sections.map((section) => (
        <a
          key={section.id}
          href={section.id}
          onClick={() => setActiveNav(section.id)}
          className={activeNav === section.id ? 'active' : ''}
        >
          {section.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;