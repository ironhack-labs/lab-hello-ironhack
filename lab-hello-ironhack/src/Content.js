import React, { Component } from 'react';
import Features from './components/features'
import './main.css';

class Content extends Component {
  render(){
    return (
      <div className="Content">
        <Features />
      </div>
    );
  }
}

export default Content;
