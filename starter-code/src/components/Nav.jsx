import React from "react";
import "./../styles/Nav.css"

export default function Nav({
    logo,
    menu
}) {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <img src={menu} alt="menu" />
        </div>
    )
}