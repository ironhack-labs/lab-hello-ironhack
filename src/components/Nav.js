import React from 'react'
import logo from '../../public/images/ironhack-logo.svg'
import menu from '../../public/images/menu-top.svg'
import './styles/Nav.css'

const nav = () => {
    return (
        <nav className="Nav">
            <img src={logo} />
            <img src={menu} />
        </nav>
    )
}

export default nav