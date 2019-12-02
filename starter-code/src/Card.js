import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.image} alt="" />
        </div>
        <div>
          <h3>{this.props.hline}</h3>
          <p>{this.props.info}</p>
        </div>
      </div>
    );
  }
}
