import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className='hero-image'>
        <div className='hero-text'>
          <img src='\images\react-logo.svg' />
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a front end framwork</p>
          <button className='btn'>Awesome</button>
        </div>
      </div>
    );
  }
}

export default Hero;
