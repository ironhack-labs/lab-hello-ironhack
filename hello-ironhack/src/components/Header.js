import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="image-container">
          <img alt="iron-logo" src="images/ironhack-logo.svg" />
        </div>
        <div>
          <img alt="menu" src="images/menu-top.svg" />
        </div>
      </nav>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Nav />
        <div className="react-logo-container">
          <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
          <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
          <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
          <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
        </div>
        <div className="app-container">
          <h1 className="app-title"> Say hello to ReactJS </h1>
          <p className="app-text"> You will learn a Frontend framework from scratch to become a Ninja developer </p>
          <button className="app-button">Awesome!</button>
        </div>
      </header>
    );
  }
}

export default Header;