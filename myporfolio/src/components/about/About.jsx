import React from 'react'
import './about.css'
import moi from '../../assets/dani.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Brown " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>2 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>4 Completed</small>
              </article>
            </div>
            <p>
              {/* I am a young software engineer trained at the Faculty of
              Engineering and Technology(FET) of the University of Buea . I get
              my B.eng in 2021. Being on demand for experience, I apply to
              Camsol.io which accepts me and gives me the chance to work on real
              business projects in order to gain experience. From July 2021 to
              today, I learned technologies such as react, react native, in
              short the MERN stack, I am still learning and counting on the
              support of Camsol to increase my knowledge at end of being an
              engineer not only graduate, but also qualified. I hold a
              French-speaking baccalaureate D sexion, my university studies at
              FET I did in English. I can therefore express myself in French and
              in English (average). */}
            </p>"I'm Fonji Daniel Kukuh, a software engineer studying at the University of Buea, specializing in frontend development. With over 2 years of experience in JavaScript, HTML, and React, I have honed my skills in building user-friendly web applications. Passionate about creating engaging digital experiences, my love for gaming has been a driving force behind my career choice.

I'm committed to continuous growth and staying updated with the latest industry trends. By working on diverse projects, I aim to expand my expertise. Fluent in English, I effectively communicate and express ideas.
            <a href="#contact" className="btn btn-primary">
              talk with me
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
