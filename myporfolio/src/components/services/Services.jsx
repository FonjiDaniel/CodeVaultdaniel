import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>JAVA</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Kotlin</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Dart</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Flutter</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>React</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX FIELD */}
         <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Html</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>NODE JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>React</p>
            </li>
         
          </ul>
        </article>
            {/* WEB DEVELOPMENT ENDS*/}
         <article className="service">
          <div className="service__head">
            <h3>Desktop Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>JAVAFX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Electron JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;