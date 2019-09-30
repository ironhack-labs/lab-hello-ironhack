import React, { Component } from 'react'
import './cajita.css'

export default class Cajita extends Component {
  constructor(props){
    super();
    
  }

  render() {
    return (
      <div className="cajita">
        <img src={this.props.image} alt=""/>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
