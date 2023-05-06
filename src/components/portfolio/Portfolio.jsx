import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Cloud Web Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/cloud" className='btn' target='_blank'>Github</a>
          <a href="https://cloud-six-chi.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Netflix Clone Web App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/netflix" className='btn' target='_blank'>Github</a>
          <a href="https://netflix-ten-iota.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Professional Admin Dashboard</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/dashboard" className='btn' target='_blank'>Github</a>
          <a href="https://goketech.github.io/dashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Bank App Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/bank_modern_app" className='btn' target='_blank'>Github</a>
          <a href="https://bank-modern-app-r9rw.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Movie Trailer App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/movie-trailer-app" className='btn' target='_blank'>Github</a>
          <a href="https://movie-trailer-app-goketech.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>OpenAI Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Goketech/gpt3_goke" className='btn' target='_blank'>Github</a>
          <a href="https://gpt3-goke.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio