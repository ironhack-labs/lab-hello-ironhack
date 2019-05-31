import React, { Component } from "react";
import "./App.css";

class Text extends Component {
  render () {
    const { className, children } = this.props;

    return (
      <p className={className}>{children}</p>
    );
  }
}

export default Text;