import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="" />
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
