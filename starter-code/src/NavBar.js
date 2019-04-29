import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div className="NavBg">
        <img src={"../images/ironhack-logo.svg"} alt="logo"/>
        <img src={"../images/menu-top.svg"} alt="menu"/>
      </div>
    )
  }
}

export default NavBar ;
