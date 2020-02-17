import React from 'react';
import "./../styles/Navbar.css";

export default function Navbar({
    logo,
    menu
}) {
    return (
        <nav className="navBar">
            <img src={logo} alt={`logo`} />
            <img src={menu} alt={`menu`} />
        </nav>
    )
}

