import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {  }
  render() {
    return (
      <div className="App">
        <div className="first-block">
          <img src="../images/ironhack-logo.svg"></img>
          <h1> Say hello to</h1>
          <h1> ReactsJS </h1>
          <span> You will learn a Frontend</span><br></br>
          <span> framework from scratch, to</span><br></br>
          <span> become a Ninja Developer</span><br></br>
          <button className="button">Awesome!</button>
        </div>
        <div className="second-block">
            <img src="../images/icon1.png"></img>
            <img src="../images/icon2.png"></img>
            <img src="../images/icon3.png"></img>
            <img src="../images/icon4.png"></img>
        </div>

        <div className="third-block">
            <span>Declarative</span>
            <span>Components</span>
            <span>Single-Way</span>
            <span>JSX</span>
        </div>

        <div className="fourth-block">
            <span>React makes it painless to create interactive UIs</span>
            <span>Build encapsulated components that manage their state</span>
            <span> A set of immutable values are passed to the components</span>
            <span>Statically typed designed to run on modern browsers</span>
        </div>

      </div>
    );
  }
}

export default App;



