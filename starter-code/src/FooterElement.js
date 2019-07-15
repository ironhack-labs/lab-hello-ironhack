import React, { Component } from 'react'

export default class FooterElement extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      
      <div className="FooterElement">
        <img src={this.props.url} height="100" width="100" />
        <h3>{this.props.title}</h3>
        <h6>{this.props.description}</h6>
      </div>
    )
  }
}
