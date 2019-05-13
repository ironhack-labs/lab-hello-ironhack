import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <h1>{this.props.title}</h1>
        <p>{this.props.info}</p>
      </div>
    );
  }
}
