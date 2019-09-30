import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div>
      <img src={this.props.image}></img>
      <h1> {this.props.title} </h1>
      <h3>{this.props.text}</h3>
      
      </div>
    )
  }
}
