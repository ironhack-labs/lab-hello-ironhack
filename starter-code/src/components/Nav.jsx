import React from 'react';
import "../styles/Nav.css";

export default function Nav({logo, menu}) {
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <img src={menu} alt="hamburger" />
        </div>
    )
}
