import React from 'react'

import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <Nav/>
      <div class="hero">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend Framwork from Scratch, to become a ninja developer.</p>
      <a href="#">Awesome!</a>
      </div>
    </header>
  )
}

export default Header
