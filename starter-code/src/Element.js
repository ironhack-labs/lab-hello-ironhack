import React, { Component } from "react";

export default class Element extends React.Component {
  render() {
    return (
      <div id="element">
        <img src={this.props.image}></img>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
