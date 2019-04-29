import React, { Component } from 'react';
import "./declarative.css";


export default class declarative extends Component {
  render() {
    return (
      <div className="col">
         <img src={this.props.source} /> 
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
