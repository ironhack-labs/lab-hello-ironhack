import React from 'react'; 
import './Navbar.css';

const ironhackLogo = '/images/ironhack-logo.svg';
const menuIcon = '/images/menu-top.svg';

const Navbar = () => {
  return (
    <nav>
      <img src={ironhackLogo} alt='Ironhack Logo' />
      <a href='#'><img src={menuIcon} alt='Menu Icon' /></a>
    </nav>
  )
}

export default Navbar;
