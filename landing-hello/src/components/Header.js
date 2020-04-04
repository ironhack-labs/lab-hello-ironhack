import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return (
    <nav className="nav">
          <img alt="none" src="images/ironhack-logo.svg" />
          <img alt="none" src="images/menu-top.svg" />
    </nav>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <header className="App-header">
          <Nav />
          <img alt="none" class="react-logo first" src="images/react-logo.svg" />
          <img alt="none" class="react-logo second" src="images/react-logo.svg" />
          <img alt="none" class="react-logo third" src="images/react-logo.svg" />
          <img alt="none" class="react-logo fourth" src="images/react-logo.svg" />
          <div className="App-title-div">
            <h1 className="App-title"> Say hello to ReactJS </h1>
            <p className="App-text-small"> You will learn a Frontend framework from scratch to become a Ninja developer </p>
          </div>
          <button className="App-button">Awesome!</button>
      </header>
    );
  }
}

export default Header;
