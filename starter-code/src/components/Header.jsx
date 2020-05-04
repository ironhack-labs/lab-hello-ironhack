import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <img alt="none" src="images/ironhack-logo.svg" />
        <img alt="none" src="images/menu-top.svg" />
      </nav>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Nav />
        <div className="react__logos">
          <img alt="" class="small" src="images/react-logo.svg" />
          <img alt="" class="big" src="images/react-logo.svg" />
          <img alt="" class="big" src="images/react-logo.svg" />
          <img alt="" class="small" src="images/react-logo.svg" />

        </div>
        <div className="header">
          <h1> Say hello to ReactJS </h1>
          <p>You will learn a Frontend framework from scratch to become a Ninja developer!</p>
          <button>Awesome!</button>
        </div>

      </header>
    );
  }
}

export default Header;