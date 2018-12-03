import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Img.js'

class App extends Component {
  render() {
    return (
      <div className="app">
      <div className="header">
         <img src="images/ironhack-logo.svg" alt="lkdsfjlkdsfj"/> 
         <img src="images/menu-top.svg" alt="lkdsfjlkdsfj"/> 
      </div>
      <div className="body">
      <h1>Say Hello to </h1>
       <h1> ReactJs</h1>
      <h4>You will learn a Frontend
        framework from scratch, to 
        become an Ninka Developer.
      </h4>
      <button >Awesome!</button>
      </div>
      <div>
      <Img />
      </div>
      </div>
    );
  }
}

export default App;
