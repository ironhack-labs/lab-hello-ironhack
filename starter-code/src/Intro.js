import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <Navbar />
        <div className="content">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
          <button>Awesome!</button>
        </div>
      </div>
    )
  }
}
