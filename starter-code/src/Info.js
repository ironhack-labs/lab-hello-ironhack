import React, { Component } from "react";
import "./App.css";

class Info extends Component {
  render() {
    return (
      <div className="cardInfo">
        <img src={this.props.imglink}></img>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Info;