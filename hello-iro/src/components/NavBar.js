import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { parentClass, logoClass, logoSrc, menuClass, menuSrc } = this.props;

    return (
      <div className={parentClass}>
        <img src={logoSrc} className={logoClass} />
        <img src={menuSrc} className={menuClass} />
      </div>
    );
  }
}

export default NavBar;
