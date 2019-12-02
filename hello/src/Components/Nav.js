import React from 'react'
import ImgIron from '../images/ironhack-logo.svg'
import ImgMenu from '../images/menu-top.svg'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <img src={ImgIron} alt='Logo Iron' />
            <img src={ImgMenu} alt='Menu' />
        </nav>
    )
}
export default Nav