import React from 'react'
import ironhacklogo from './images/ironhack-logo.svg'; // importing logo from src folder
import menutop from './images/menu-top.svg'; // importing logo from src folder


const Navbar = () => {
    return (
      <nav className="App-navbar">
        <img src={ironhacklogo} className="ironhack-logo" alt="ironhack-logo" />

        <img src={menutop} className="menutop-logo" alt="menutop-logo" />

      </nav>
    )
  }
  
  export default Navbar;