import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render(){
    return(
      <nav className="App-nav">
        <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
        <img src="/images/menu-top.svg" className="App-menu" alt="menu-top" />
      </nav>
    )
  }
}

export default Nav;
