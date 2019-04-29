import React, { Component } from 'react';
import "./navBar.css";

export default class navBar extends Component {
  render() {
    return (
      <div className="header">
       <img src="/images/ironhack-logo.svg" alt="" className="imgNavBar" /> 
       <img src="/images/menu-top.svg" alt="menu-top" className="menuTop"/>  
      </div>
    )
  }
}
