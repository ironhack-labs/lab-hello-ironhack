import React, { Component } from "react";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="headerStyle">
        <img className="img" src={this.props.imagen} />
        <img className="img" src={this.props.imagen} />
        <h1> {this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
