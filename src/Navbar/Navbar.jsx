import './Navbar.css'
import React from 'react'

const logo = "images/ironhack-logo.svg"
const menu = "images/menu-top.svg"

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo-ironhack" />
            <img src={menu} alt="menu-bar"/>
        </nav>
    )
}

export default Navbar;
