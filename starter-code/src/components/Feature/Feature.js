
import React, { Component } from "react";
import "./Feature.css";


class Feature extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
      <div className="Feature">
        <img src={this.props.imgPath}></img>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Feature;