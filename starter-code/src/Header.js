import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render () {
        return (
            <header className="header">
                <nav>
                    <img src="../images/ironhack-logo.svg" alt="ironhackLogo" />
                    <img src="../images/menu-top.svg" alt="menuTop" />
                </nav>
                <h1>Say hello to ReactJS</h1>
                <h2>You will learn a Frontend framework from scratch, to become an Ninka Developer</h2>
                <button>Awesome!</button>
                <img className="big logo" src="../images/react-logo.svg" alt=""/>
                <img className="small top logo" src="../images/react-logo.svg" alt=""/>
                <img className="small middle logo" src="../images/react-logo.svg" alt=""/>
                <img className="small bottom logo" src="../images/react-logo.svg" alt=""/>
                <img className="normal up logo" src="../images/react-logo.svg" alt=""/>
                <img className="normal down logo" src="../images/react-logo.svg" alt=""/>
            </header>
        );
    };
};

export default Header;


