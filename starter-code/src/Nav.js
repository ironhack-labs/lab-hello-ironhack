import React, { Component } from "react";
import "./App.css";

class Nav extends Component {
  render() {
    return (
      <nav id="nav">
        <img src={this.props.imageprop}/>
        <img src="/images/menu-top.svg"/>
      </nav>
    );
  }
}

export default Nav;