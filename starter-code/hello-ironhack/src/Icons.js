import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Icons extends Component {
    render() {
      const bottomDiv = 
      (
      <div className="bottomTextTitles">
      <div>
        <img src='images/icon1.png' alt="logo" />
        <h2> Declarative</h2>
        <h4> React makes it <br/> painless to create <br/> interactive UIs.</h4>
      </div> 
      <div>
        <img src='images/icon2.png' alt="logo" />
        <h2> Components</h2>
        <h4> Build encapsulated <br/> components that <br/> manage their state.</h4>
      </div>
      <div> 
        <img src='images/icon3.png' alt="logo" />
        <h2> Single-Way</h2>
        <h4> A set of immutable <br/> values are passed to <br/> the components.</h4>
      </div>
      <div>
  
        <img src='images/icon4.png' alt="logo" />
        <h2> JSX</h2>
        <h4> Statically-typed, <br/> designed to run on <br/> modern browsers.</h4>
      </div>
      
      </div>
      )
  
      return (
        <div className="App">
          {bottomDiv}
        </div>
      );
    }
  }















export default Icons;