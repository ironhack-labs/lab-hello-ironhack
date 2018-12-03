import React, { Component } from "react";
import "./App.css";
// import menu from "./images/menu-top.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "nav-img">
          <img className= "img-1" src="/images/ironhack-logo.svg" />
          <img className= "img-2" src="/images/menu-top.svg" />
        </div>

        <h1> Say hello to  ReactJS </h1>
        <p>
          You will learn a Frontend framework from scratch, to become an Ninka
          Developer.
        </p>
        <button onClick>Awesome!</button>
      </div>
    );
  }
}

export default App;
