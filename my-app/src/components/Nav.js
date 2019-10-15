import React from 'react'
import './Nav.css'
import logo from '../public/images/ironhack-logo.svg';
import menu from '../public/images/menu-top.svg';

const Nav = () => {
    return (
        <div className='appNavContainer'>
            <nav className='appNav'>
                <img className='logo' src={logo} alt='logo'></img>
                <img className='menu' src={menu} alt='menu'></img>
            </nav>
        </div>
    );
};

export default Nav;