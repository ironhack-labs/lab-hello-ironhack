import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="App-description">
        <h2>{this.props.data1}<br></br>{this.props.data2}<br></br>{this.props.data3}</h2>
      </div>
    );
  }
}

export default Description;