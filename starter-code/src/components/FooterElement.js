import React, { Component } from 'react'

export default class FooterElement extends Component {
  render() {
    return (
      <div className="reactFeatures">
      <img src={this.props.card.image} alt="" />
      <h2>{this.props.card.title}</h2>
      <p>{this.props.card.text}</p>

      </div>
    )
  }
}
