import React from "react";
import "./Navbar.css"
const logo = "/images/myLogo.PNG"

function Navbar() {
    return (
        <nav>
            <div>
                <img src={logo} className="navLogo" alt="image of the logo"></img>
            </div>
            <div className="nav-bar-links">
                <button><a className="nav-bar-link" href="#">Home</a></button>
                <button><a className="nav-bar-link" href="#">Gallery</a></button>
                <button><a className="nav-bar-link" href="#">Contact</a></button>
            </div>
        </nav>
    )
}
export default Navbar;
