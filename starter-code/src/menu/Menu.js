import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/images/ironhack-logo.svg"></img>
          </div>
          <div className="menu">
            <img src="/images/menu-top.svg"></img>
          </div>
        </div>
      </nav>
    );
  }
}
