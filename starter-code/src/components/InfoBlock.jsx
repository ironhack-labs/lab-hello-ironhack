import React, { Component } from "react";

export default class InfoBlock extends Component {
  render() {
    return (
      <div class="info-card">
        <img src={this.props.image} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
