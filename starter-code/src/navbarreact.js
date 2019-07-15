import React from "react";

export default class NavbarReact extends React.Component {
  render() {
    return (
      <navbar className="navbarReact-widget">
        <img
          id="iron-logo"
          src="../images/ironhack-logo.svg"
          alt="ironhack-logo"
        />
        <img id="burguer" src="../images/menu-top.svg" alt="menu-top" />
      </navbar>
    );
  }
}
