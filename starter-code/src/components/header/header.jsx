import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <h1>Say hello to<br />ReactJS</h1>
          <h3>
            You will learn a Frontend<br />framework from scratch, to<br />became a Ninka Developer.
          </h3>
        </div>
        <button>Awesome!</button>
      </div>
    );
  }
}

export default Header;
