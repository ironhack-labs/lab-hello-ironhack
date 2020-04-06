import React, {Component} from 'react';
import './card.css'


class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.icon} alt=""/>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;