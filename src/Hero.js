
import React from 'react'
// import IronhackLogo from './ironhack-logo.svg'
// import MenuBtn from './menu-top.svg'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="container hero__container">
        <ul className="hero__menu">
          <li><img src='./images/ironhack-logo.svg' alt='Ironhack logo' /></li>
          <li><img src='./images/menu-top.svg' alt='menu button' /></li>
        </ul>
        <div className="hero__info">
          <div className="hero__info-left">
            <h1 className='hero__info-header'>Say hello to ReactJS</h1>
            <p className='hero__info-subtext'>'You will learn how to use<br /> the most popular frontend library,<br /> and become a super Ninja developer!'</p>
          </div>
          <div className="hero__info-right">
          </div>
        </div>
        <div>
          <button type='button' className="hero__btn">Awesome!</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
