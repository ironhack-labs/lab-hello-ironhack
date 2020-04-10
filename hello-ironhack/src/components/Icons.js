import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const { image, title, text } = this.props;
    return (
      <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    )
  }
}

export default Icon;