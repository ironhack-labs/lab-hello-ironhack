import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return(
      <div className="footerElement">
        <img src={this.props.image} alt=""></img>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
