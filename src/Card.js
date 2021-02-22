import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.icon} alt="icon1" />
        <h3>{this.props.header}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
