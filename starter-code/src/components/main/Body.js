import React, { Component } from 'react'

export default class Body extends Component {
  constructor(props) {
    super()



  }
  render() {
    return (
      <div className='maintext'>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <button>{this.props.btn}</button>
      </div>
    )
  }
}
