import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="intro">
          <h1>Say Hello to ReactJS</h1>
          <h2>You will learn a front end framework from scratch to become a ninja developer</h2>
          <Button />
        </div>
      </header>
    );
  }
}

export default Header;