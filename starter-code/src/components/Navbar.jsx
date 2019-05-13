import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <img className="logo" src="./images/ironhack-logo.svg" alt="logo" />
                <img className="menu-top" src="./images/menu-top.svg" alt="menu-top" />
            </div>
        );
    }
}

export default Navbar;