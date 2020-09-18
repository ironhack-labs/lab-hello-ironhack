import React from 'react';
import "../App.css";

function Hero() {
  return (
    <section className='hero-section'>
      <div class="container">
        <nav>
          <img src='/images/ironhack-logo.svg' />
          <img src='/images/menu-top.svg' />
        </nav>
        <header className="hero__text">
          <h1 className='hero__text-heading'>Say hello to<br /> ReactJS</h1>
          <h3 className='hero__text-subheading'>You will learn a Frontend framework from scratch, to become a Ninka Developer</h3>
        </header>
        <button className='hero__btn'>Awesome!</button>
      </div>
    </section>
  )
}

export default Hero;