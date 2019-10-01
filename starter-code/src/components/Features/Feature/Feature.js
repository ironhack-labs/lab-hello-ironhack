import React, { Component } from 'react'
import './Feature.css'

export default class Feature extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <li className='Feature' key={this.props.id}>
        <img src={this.props.img} alt={ 'icon' + this.props.title}/>
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </li>
    )
  }
}