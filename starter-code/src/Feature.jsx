import React, { Component } from 'react';
import './Feature.css';

export default class Feature extends Component {
  render() {
    return (
      <div className="Feature">
        <img src={this.props.img}/>
        <h3>{this.props.detail}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
