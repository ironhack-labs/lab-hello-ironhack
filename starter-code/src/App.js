import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
 
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
            <div className="primary-container">
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h3>
                <button>Awesome!</button>
            </div>
          </div>  
          <div className="secondary-container">
            <div className="container-box">
              <img src="/images/icon1.png"></img>
              <h3>Declarative</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="container-box">
              <img src="/images/icon2.png"></img>
              <h3>Components</h3>
              <p>Build encapsulated components that manager their state.</p>
            </div>
            <div className="container-box">
              <img src="/images/icon3.png"></img>
              <h3>Single-Way</h3>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="container-box">
              <img src="/images/icon4.png"></img>
              <h3>JSX</h3>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
      </div>
    );
  }
}

 
export default App;