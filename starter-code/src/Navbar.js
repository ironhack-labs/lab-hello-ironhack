import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return (
            <nav>
                <img src="./images/ironhack-logo.svg"></img>
                <div className="menu-icon">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;