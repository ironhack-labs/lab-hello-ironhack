import React, { Component } from "react";
import "./App.css";

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">


      <Header />
      
      <div className="blue-section">
        <div className="navbar">
          <img src="../images/ironhack-logo.svg"></img>
          <img src="../images/menu-top.svg"></img>
        </div>
       
        <div className="text">
          <h1>Say hello to</h1>
            <br/>
          <h1>ReactJS</h1>
          <h5>
            You will learn a frontend 
             <br/>
            framework from scratch, to
              <br/>
              become a Ninja developer
              <br />
          </h5>
              <button variant="light">Awesome</button>          
        </div> </div>
        <div className="multiple-logos">
        <div>
          <img src="../images/icon1.png"></img>
            <br /> <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src="../images/icon2.png"></img>
          <br /> <h3>Components</h3>
          <p>Build encapsulated components that mange their state</p>
        </div>
        <div>
          <img src="../images/icon3.png"></img>
          <br /> <h3>Single-Way</h3>
          <p>A set of inmutable values and passed to the components</p>
        </div>
        <div>
          <img src="../images/icon4.png"></img>
          <br /> <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;