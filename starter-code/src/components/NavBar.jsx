import React from "react";
import "../../public/css/NavBar.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <img src="../images/ironhack-logo.svg" alt="logo image" />
                <img src="../images/menu-top.svg" alt="nav manu image" />
            </div>
        )
    }
}

export default NavBar;