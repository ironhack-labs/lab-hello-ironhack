import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {

    render(){
        return (
            <div className="navBar">
                <img src="/images/ironhack-logo.svg"></img>
                <img src="/images/menu-top.svg"></img>
            </div>
           
        )
    }
}

export default NavBar;