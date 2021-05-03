import React from 'react';
import './HeaderComponent.css';



function Header () {
    return (
        <div className='header'>
            <div className='navbar'>
                <img src="./images/ironhack-logo.svg" />
                <img src="./images/menu-top.svg" />

            </div>
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    )
}

export default Header;