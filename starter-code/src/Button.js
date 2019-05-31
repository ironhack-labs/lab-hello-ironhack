import React, { Component } from "react";
import "./App.css";

class Button extends Component {
  render () {
    const { className, children } = this.props;

    return (
      <button className={className}>{children}</button>
    );
  }
}

export default Button;