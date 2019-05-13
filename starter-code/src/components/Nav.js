import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav class="navigation">
        <ul class="nav-container">
          <li><img src="/images/ironhack-logo.svg" /></li>
          <li class="menu"><img src="/images/menu-top.svg" /></li>
        </ul>
      </nav>
    );
  }
}

export default Nav