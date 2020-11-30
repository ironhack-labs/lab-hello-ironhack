import React from 'react';
import './styles/Header.css';
// import logo from '../../public/images/react-logo.svg';

const Header = (props) => {
    return(
        <div className="Header">
            <nav>
                <img src="/images/ironhack-logo.svg" alt="ironhack logo" />
                <img src="/images/menu-top.svg" alt="menu logo" />
            </nav>
            <div className="text">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
        </div>
    )
}

export default Header;