import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Icons extends Component {
  render(){
    return (
      <div className="notBlue">


      <div className="thingOne">
      <img src="/icon1.png"/>
      <h3>Declarative</h3>
      <p>React makes it <br/>painless to create<br/>interective UI's.</p>
</div>

      <div className="thingTwo">
      <img src="/icon2.png"/>
      <h3>Components</h3>
      <p>Build encapsulated <br/>components that <br/>manage their state.</p>
</div>
      <div className="thingThree">
      <img src="/icon3.png"/>
      <h3>Single-Way</h3>
      <p>A set of immutable <br/>values are passed to <br/>the component's.</p>
</div>
      <div className="thingFour">
      <img src="/icon4.png"/>
      <h3>JSX</h3>
      <p>Statically-typed, <br/>designed to run on <br/>modern browsers.</p>
</div>




      </div>
    )
  }
}

  export default Icons;
