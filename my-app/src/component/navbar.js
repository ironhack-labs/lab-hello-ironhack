import React from 'react';
import ironhackLogo from '../img/ironhack-logo.svg'
import menu from '../img/menu-top.svg'

function Navbar() {
  return (
    <nav>
      <a href="#">
        <img src={ironhackLogo} />      
      </a>

      <a href="#" className="menu">
        <img src={menu} />
      </a>

    </nav>
  
  )
}
  
export default Navbar;
