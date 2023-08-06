import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages & Frameworks</h3>
          <div className="experience__content">
             <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML/CSS</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Flask</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Express</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience__backend">
          <h3>Tools & Technologies</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Git</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Github</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience