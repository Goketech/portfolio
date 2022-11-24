import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Build high-quality user-friendly web pages.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Develop websites and applications using technologies such as HTML, CSS and JavaScriipt.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Writing organized and reusable codes.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Managing software workflow.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Creating tools that improve site interaction.</p>
            </li>
          </ul>
        </article>
        {/*END OF Front-end */}
        <article className='service'>
          <div className="service__head">
            <h3>Back-end Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Write clean code to develop functional web applications.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Troubleshoot and debug applications.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Assess efficiency and speed.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Perform quality assurance (QA) testing.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Build and maintain websites.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>writing server scripts and APIs for front-end engineers and UX designers to produce efficient programs.</p>
            </li>
          </ul>
        </article>
        {/* END OF Back-end */}
        {/* <article className='service'>
          <div className="service__head">
            <h3>Data Analyst</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
        {/*END OF DATA ANALYST */}
      </div>
    </section>
  )
}

export default Services