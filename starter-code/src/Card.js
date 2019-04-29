import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt=""/>
        <h3>{this.props.title}</h3>
        <p>{this.props.par}</p>
      </div>
    )
  }
}
