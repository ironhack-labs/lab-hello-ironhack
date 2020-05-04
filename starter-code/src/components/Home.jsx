import React, { Component } from 'react'
import Navbar from "./Navbar"
import "./home.css"

export default class Home extends Component {
    render() {
        return (
          <div className="home">
            <Navbar />
            <h1>
              Say hello to <br />
              ReactJS
            </h1>
            <h3 className="intro">
              You will learn a Frontend framework from scratch,
              <br /> to become a Ninja Developer.
            </h3>
            <button>Awesome!</button>
            <img className="logo1" src="images/react-logo.svg" alt="" />
            {/* <img className="logo2" src="images/react-logo.svg" alt="" />
            <img className="logo3" src="images/react-logo.svg" alt="" /> */}
          </div>
        );
    }
}
