import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <section className="header-nav">
        <div>
          <img src="/images/menu-top.svg" className="App-nav" alt="nav" />
        </div>
        <div>
          <img
            src="/images/ironhack-logo.svg"
            className="App-logo"
            alt="logo"
          />
        </div>
      </section>
    );
  }
}

export default Nav;
