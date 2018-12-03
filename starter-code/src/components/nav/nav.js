import React from "react";
import "./nav.css";
class Nav extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="Nav">
                <nav className="navbar">
                    <img src="images/ironhack-logo.svg"></img>
                    <img src="images/menu-top.svg"></img>
                </nav>
            </div>
        );
    }
}

export default Nav;