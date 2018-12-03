import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
      <h1>Say hello to <br/>
      ReactJS </h1>
      <p>You will learn a Frontend <br/>
      framework from scratch to <br/>
      become an Ninka Developer.  </p>
      <button>Awesome!</button>
      </div>
    );
  }
}

export default Header;