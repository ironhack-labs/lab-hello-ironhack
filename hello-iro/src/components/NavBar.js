import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, bClass } = this.props;
    return (
      <div className={this.props.aClass}>
        <button className={bClass}>{text}</button>
      </div>
    );
  }
}

export default Button;
