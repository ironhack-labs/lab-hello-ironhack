import React, { Component } from "react";
//import logo from '../images/ironhack-logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
       <nav className="navbar"> 
        <div>
            <img src="images/ironhack-logo.svg"/>
        </div>
        <div>
            <img src="images/menu-top.svg"/>
        </div>
    
       </nav>
      </div>
    );
  }
}


