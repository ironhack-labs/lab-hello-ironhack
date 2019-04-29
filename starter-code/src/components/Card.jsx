import React, { Component } from 'react'
import "../../public/css/Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="image card" />
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p> 
      </div>
    )
  }
}
