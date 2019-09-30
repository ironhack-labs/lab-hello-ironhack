import React, { Component } from 'react'
import "./NavBar.css";

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.logo = "images/ironhack-logo.svg",
        this.menu = "images/menu-top.svg"
    }
    render() {
        return (
            <div className="navbar">
                <div className="menu">
                <img src={this.logo} alt="logo" />
                <img src={this.menu} alt="menu" />
                </div>
                <div className="intro">
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h3>
                <button>Awesome!</button>
                </div>
            </div>
        )
    }
}
