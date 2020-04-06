/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import '../main.css';

class Features extends Component {
  render(){
    return (
      <div className="Features">
        <div className="App-features">
          <div className="feature">
            <img src={icon1} className="feature-icons"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="feature">
            <img src={icon2} className="feature-icons"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="feature">
            <img src={icon3} className="feature-icons"/>
            <h3>Single-Way</h3>
            <p>A set of inmutable values are passed to the component's</p>
          </div>
          <div className="feature">
            <img src={icon4} className="feature-icons"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;