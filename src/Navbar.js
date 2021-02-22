import React from 'react';
import './App.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img src="/images/ironhack-logo.svg" alt="" />
                <img id="menu" src="/images/menu-top.svg" />
            </div>
        )
    }
}

export default Navbar;