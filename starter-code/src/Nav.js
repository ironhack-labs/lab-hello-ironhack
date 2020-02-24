import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            {/* Here goes the Logo */}
            <img src='/images/ironhack-logo.svg' alt='' />
          </li>
          <li>
            {/* Here goes the menu */}
            <img src='/images/menu-top.svg' alt='' />
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
