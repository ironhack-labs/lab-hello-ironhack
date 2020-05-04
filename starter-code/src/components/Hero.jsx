import React from 'react'
import '../styles/Hero.css'
import CallToAction from './CallToAction'

function Hero() {
  return (
    <div className='hero'>
      <h1 className='hero__title'>Say hello to ReactJS</h1>
      <p className='hero__text'>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
      <CallToAction/>
    </div>
    
  )
}

export default Hero
