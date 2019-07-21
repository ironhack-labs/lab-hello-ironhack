import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="intro">
          <h1>Say Hello to ReactJS</h1>
          <h2>You will learn a front end framework from scratch to become a ninja developer</h2>
          <a href="#"><button className="btn" type="button">Awesome!</button></a>
        </div>
      </header>
    );
  }
}

export default Header;