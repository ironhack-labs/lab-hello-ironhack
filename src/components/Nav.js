import React from 'react'
import './App.css'
import ironhackLogo from '../images/ironhack-logo.svg'
import menuTop from '../images/menu-top.svg'

const Nav = () => {
    return (
        <section className='container-fluid'>
            <nav>
                <img src={ironhackLogo} alt='Ironhack Logo' className='nav-logo' />
                <img src={menuTop} alt='menu'/>
            </nav>
        </section>
    )
}




export default Nav
