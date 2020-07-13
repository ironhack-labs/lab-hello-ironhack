import React from 'react'
import logo from '../../public/ironhack-logo.svg'
import burger from '../../public/menu-top.svg'
import './nav.css'

const Nav = () => {

    return (
        <header className="nav-style">
            <img src = {logo} alt="logo"></img>
            <img src = {burger} alt="burger"></img>
        </header>
    )
}

export default Nav