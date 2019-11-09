import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <nav>
                    <img src='../../public/images/ironhack-logo.svg' />
                    <img src='../../public/images/menu-top.svg' />
                </nav>
                <div className='textContainer'>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                    <button>Awesome!</button>                    
                </div>
            </div>
        )
    }
}

export default Header;