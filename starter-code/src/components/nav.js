import React from 'react';
import "../stylesheets/nav.scss";
import logo from "../images/ironhack-logo.svg";
import menu from "../images/menu-top.svg";

function Nav(){
    return (
        <div className="nav-formatting">
            <img src={logo}></img>
            <img src={menu} className="shift-right"></img>
        </div>
    )
}

export default Nav