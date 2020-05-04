import React, { Component } from 'react'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="#"><img src="images/ironhack-logo.svg" alt="ironhack logo" /></a>
                <a href="#"><img src="images/menu-top.svg" alt="menu button" /></a>
            </nav>
        )
    }
}
