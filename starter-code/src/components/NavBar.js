import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor() {
        super()
        this.logo = {
            img:"images/ironhack-logo.svg"
        }
        this.menu = {
            img:"images/menu-top.svg"
        }
    }
    
    render() {
        return (
            <nav className="Navbar">
                <img height="60" src={this.logo.img} />

                <img height="15" src={this.menu.img} />
            </nav>
        )
    }
}
