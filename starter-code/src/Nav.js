import React from "react";

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li> <img id="logo-ih" src="/images/ironhack-logo.svg"/> </li>
        <li id="burger-menu"> <img src="/images/menu-top.svg" id="burger-menu"/> </li>
      </ul>
    );
  }
}

