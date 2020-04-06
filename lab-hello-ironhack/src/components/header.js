import React, { Component } from 'react';
import logo from '../ironhack-logo.svg';
import menu from '../menu-top.svg'
import '../main.css';

class Header extends Component {
  render(){
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Ironhack-logo" />
          <img src={menu} className="menu-top" alt="menu-top" />
        </header>
      </div>
    );
  }
}

export default Header;