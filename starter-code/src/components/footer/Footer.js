import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className='item'>
        <img src={this.props.icon} alt="icon"/>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
