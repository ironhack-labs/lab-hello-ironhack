import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <a
          className="Button-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
      </div>
    );
  }
}

export default Button;
