import React, { Component } from "react"; // using desctructering for component -> instead of React.Component
import ironhackLogo from "/../public/ironhack-logo.svg"; // use variable for images
import menuImg from "/../public/menu-top.svg";

{
    /* <img src={require("/../public/ironhack-logo.svg")} /> -> without variable */
}
{
    /* <div className="nav-bar">
                        <img src={ironhackLogo} /> 
                        <img src={require("/../public/menu-top.svg")} />
                    </div> */
}

class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={ironhackLogo} alt="logo" />
                <img src={menuImg} alt="menu" />
            </div>
        );
    }
}

export default Navigation;
