import React, { Component } from "react";
import "./App.css";

class TitleText extends Component {
  render() {
    const { type, className, children } = this.props;
    switch (type) {
      case "h1":
        return (
          <h1 className={className}>{children}</h1>
        );
      case "h2":
        return (
          <h2 className={className}>{children}</h2>
        );
    }
  }
}

export default TitleText;