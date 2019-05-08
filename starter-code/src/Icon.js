import React, { Component } from "React";
import "./Icon.css";

class Icon extends Component {
  render() {
    return (
      
        <div className="icons">
          <img src={this.props.icon.img} />
          <h2>{this.props.icon.name}</h2>
          <p>{this.props.icon.description}</p>
        </div>
      
    );
  }
}

export default Icon;
