import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="App-card">
          <img src={this.props.img}></img>
            <h2>{this.props.header}</h2>
            <h3>{this.props.description}</h3>
      </div>
    );
  }
}

export default Card;