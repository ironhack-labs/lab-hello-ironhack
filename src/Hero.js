import React, { Component } from 'react'
// import IronhackLogo from './ironhack-logo.svg'
// import MenuBtn from './menu-top.svg'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <div className="container hero-container">
          <ul className="hero-menu">
            <li><img src='./images/ironhack-logo.svg' alt='Ironhack logo' /></li>
            <li><img src='./images/menu-top.svg' alt='menu button' /></li>
          </ul>
          <div className="hero-info">
            <h1 className='hero-info__header'>Say hello to ReactJS</h1>
            <p className='hero-info__text'>'You will learn how to use the most popular frontend library, and become a super Ninja developer'</p>
          </div>
          <div>
            <button type='button' className="hero-btn">Awesome!</button>
          </div>

        </div>

      </section>
    )
  }
}

export default Hero
