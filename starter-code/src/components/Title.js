import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="App-title">
        <h1>{this.props.data1}<br></br>{this.props.data2}</h1>
      </div>
    );
  }
}

export default Title;