import React, { Component } from 'react';
import "../App.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src='../images/ironhack-logo.svg' alt="ironhack logo"/>
                <img src='../images/menu-top.svg' alt="menu top" />
            </div>
        );
    }
}