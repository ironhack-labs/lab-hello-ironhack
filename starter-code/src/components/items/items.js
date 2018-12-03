import React, { Component } from "react";
import "./items.css";
export default class ListItem extends Component {
  render() {
    return (
      <div className="listStyle">
        <img className="img" src={this.props.imagen} />
        <h1> {this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
