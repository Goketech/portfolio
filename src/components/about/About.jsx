import React from "react";
import "./about.css";
import ME from "../../assets/setup3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>20+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div> */}

          <p>
            As a software engineer with a proven ability to design, develop, and
            deploy scalable backend systems and infrastructure, I am passionate
            about creating innovations and bringing ideas into reality. A
            computer science student at heart, I thrive on building impactful
            and innovative software products. My dedication extends to crafting
            scalable software systems and infrastructure, and I take pride in my
            track record of developing and deploying scalable websites.
            Alongside my technical prowess, I excel in essential soft skills
            like effective communication and collaborative teamwork, empowering
            me to contribute meaningfully to projects and deliver exceptional
            results.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
