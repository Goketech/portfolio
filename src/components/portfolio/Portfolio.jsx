import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

// Add more project images here if you have them

const projects = [
  { id: 1, img: IMG7, title: 'Telex', demo: 'https://telex.im' },
  { id: 2, img: IMG8, title: 'Tifi', demo: 'https://tifi.tv/' },
  { id: 3, img: IMG9, title: 'Ecommerce Store', github: 'https://github.com/Goketech/hng-frontend-task-ii', demo: 'https://hng-frontend-task-ii.vercel.app//' },
  { id: 4, img: IMG1, title: 'Cloud Web Page', github: 'https://github.com/Goketech/cloud', demo: 'https://cloud-six-chi.vercel.app/' },
  { id: 5, img: IMG2, title: 'Netflix Clone Web App', github: 'https://github.com/Goketech/netflix', demo: 'https://netflix-ten-iota.vercel.app/' },
  { id: 6, img: IMG3, title: 'Professional Admin Dashboard', github: 'https://github.com/Goketech/dashboard', demo: 'https://goketech.github.io/dashboard/' },
  { id: 7, img: IMG4, title: 'Bank App Page', github: 'https://github.com/Goketech/bank_modern_app', demo: 'https://bank-modern-app-r9rw.vercel.app/' },
  { id: 8, img: IMG5, title: 'Movie Trailer App', github: 'https://github.com/Goketech/movie-trailer-app', demo: 'https://movie-trailer-app-goketech.vercel.app/' },
  { id: 9, img: IMG6, title: 'OPENAI Page', github: 'https://github.com/Goketech/gpt3_goke', demo: 'https://gpt3-goke.vercel.app/' },
];

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleSeeMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 6);
  }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.slice(0, visibleProjects).map(({ id, img, title, github, demo }) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              {github && <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>}
              <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="portfolio__see-more">
          <button onClick={handleSeeMore} className='btn btn-primary'>See More</button>
        </div>
      )}
    </section>
  )
}

export default Portfolio;
