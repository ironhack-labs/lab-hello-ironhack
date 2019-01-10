import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <img src="./images/ironhack-logo.svg" />
          <img src="./images/menu-top.svg" />
        </div>


        <div className="Intro">
          <h1>Say Hello to <br/> ReactJS</h1>
          <p>You will learn a Frontend <br/>framework from scratch, <br/>to becaome a Ninka Delveloper.</p>
          <button>Awesome!</button>
        </div>

        <div className="Cards">
          
          <div className="card">
            <img src="/images/icon1.png"/>
            <h2>Declarative</h2>
            <p className="p-card">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card">
            <img src="/images/icon2.png"/>
            <h2>Components</h2>
            <p className="p-card">Build encapsulated components that manage their state.</p>
          </div>
          <div className="card">
            <img src="/images/icon3.png"/>
            <h2>Single-Way</h2>
            <p className="p-card">A set of immutable values are passed to the component's.</p>
          </div>
          <div className="card">
            <img src="/images/icon4.png"/>
            <h2>JSX</h2>
            <p className="p-card">Statically-typed, designed to run on modern browsers.</p>
          </div>

        </div>


      </div>
    );
  }
}

export default App;