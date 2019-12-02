import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className="App-button">{this.props.action}</button>;
  }
}

export default Button;
