import React, { Component } from "react";
import "./Characteristics.css";

export default class Characteristics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="characteristic">
      <img src={this.props.img}/>
      <h2>{this.props.title}</h2>
      <p>{this.props.text}</p>
    </div>
    );
  }
}
