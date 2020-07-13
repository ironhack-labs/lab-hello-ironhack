import React from 'react';
import logo from './../../public/images/ironhack-logo.svg'
import hamburger from './../../public/images/menu-top.svg'


import './Navbar.css';

function Navbar(props) {
    return (
        
            <navbar className="Navbar">

                <img src={logo} className="Navbar-logo" alt="logo" />

                <img src={hamburger} className="Navbar-ham" alt="hamburger" />
            </navbar>
        
    );
}

export default Navbar;
