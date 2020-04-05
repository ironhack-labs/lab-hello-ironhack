import React, { Component } from 'react';
import './Header.css';
import Nav from './Nav';

class Header extends Component {
  render () {
    return (
      <div className="App-header-block">
        <Nav />
        <img class="react-logo first" src="images/react-logo.svg" alt="react-logo" />
        <img class="react-logo second" src="images/react-logo.svg" alt="react-logo" />
        <img class="react-logo third" src="images/react-logo.svg" alt="react-logo" />
        <img class="react-logo third third-2" src="images/react-logo.svg" alt="react-logo" />
        <img class="react-logo third third-3" src="images/react-logo.svg" alt="react-logo" />
        <img class="react-logo fourth" src="images/react-logo.svg" alt="react-logo" />
        <header className="App-header">
          <h1 className="App-title">Say hello to ReactJS</h1>
          <p className="App-subtitle">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          <button className="App-button"> Awesome!</button>
        </header>
      </div>
    )
  }
}
export default Header; 