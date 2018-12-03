import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Img extends Component {
    render() {
      return (
          <div className="footer">
        <div className="details">
          <img src="images/icon1.png"/>
          <h1>Declarative</h1>
          <h3>React makes it painless to create interactive UIs.</h3>
        </div>
        <div className="details">
          <img src="images/icon2.png"/>
          <h1>Components</h1>
          <h3>Build encapsulated components that manage their state.</h3>
        </div>
        <div className="details">
          <img src="images/icon3.png"/>
          <h1>Single-Way</h1>
          <h3>A set of immutable values are passed to the component's</h3>
        </div>
        <div className="details">
          <img src="images/icon4.png"/>
          <h1>JSX</h1>
          <h3>Statically-typed, designed to run on modern browsers</h3>
        </div>
  </div>
      );
    }
  }
  
  export default Img;
  