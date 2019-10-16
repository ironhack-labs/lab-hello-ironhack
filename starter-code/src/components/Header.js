import React from 'react'

function Header () {
  return (
    <div className='Container'>
      <div className='Header'>
        <nav className='Navbar'>
        <img className='Logo' src='./images/ironhack-logo.svg'/>  
        <img className='Menu' src='./images/menu-top.svg'/>  
        </nav>
        <div className='TextBlock'>
          <h1 className='TextColor'>Say hello to <br/> ReactJS</h1>
          <p className='TextColor Paragraph'>You will learn a Frontend <br/> framework from scratch, to <br/> become an Ninka Developer</p>
        </div>
        <div className='ButtonBlock'>
          <button className='Button'>Awesome!</button>
        </div>
        <img className='HeaderImage' src='./images/react-logo.svg'/>
      </div>
    </div>
  )
}

export default Header;
