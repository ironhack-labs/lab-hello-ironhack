import React from 'react'

import './navbar.css'

const Navbar = props => {

    return (
        <nav className="navbarContent">
            <img className="navBarLogo" src={props.logo} alt="Ironhack-Logo" />
            <img className="navBarHamburguer" src={props.hamburguer} alt="Responsive menu" />




        </nav>
    )
}

export default Navbar