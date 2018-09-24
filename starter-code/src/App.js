import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="topDiv">
      <div className="container">
      <div className="row topNav">
        <img src={'/images/ironhack-logo.svg'} className="ironlogo img-fluid"/>
        <img src={'/images/menu-top.svg'} className="img-fluid"/>
      </div>
      <div className="row top-container">
      <div className="col-6">
        <h1> Say Hello to ReactJS </h1>
        <p>You will learn a Frontend framework from scratch to become a Ninja Developer</p>
        <button className="btn btn-light">Awesome!</button>
      </div>
      <div className="col-6 dumbProtons">
      </div> </div></div>
      </div>
      <div className="bottomDiv">
      <div className="row">
      <div className="col-2">
      <img src={'/images/icon1.png'} className='img-fluid'/>
      <h3>Delcarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="col-2">
      <img src={'/images/icon2.png'} className='img-fluid'/>
      <h3>Componenets</h3>
      <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="col-2">
      <img src={'/images/icon3.png'} className='img-fluid'/>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="col-2">
      <img src={'/images/icon4.png'} className='img-fluid'/>
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
      </div></div>
      </div>
    );
  }
}

export default App;
