import React, { Component } from "react";
import "./App.css";
// import icon1 from '../public/images/icon1.png'



class App extends Component {
  render() {
    // console.log(React)
    return (
      <img src="images/ironhack-logo.svg" alt="logo"></img>
      <img src="images/menu-top.svg" alt="menu"></img>
      <img src="images/react-logo.svg" alt="menu"></img>
      <div className="App">
        <h1>Say Hello to ReactJS</h1>
       
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <button>Awesome!</button>
        <div>
        <img src="images/icon1.png" alt="Icon 1"/>
        <h3>Declarative</h3>
        React makes it painless to create interactive UIs.
      </div>
      <div>
        <img src="images/icon1.png" alt="Icon 1"/>
        <h3>Components</h3>
          Build encapsulated components that manage their state.
      </div>
      <div>
          <img src="images/icon1.png" alt="Icon 1"/>
          <h3>Single-Way</h3>
            A set of immutable values are passed to the component's.
      </div>
      <div>
          <h3>JSX</h3>
          Statically-typed, designed to run on modern browsers.
      </div>
    </div>

     
    );
  }
}

export default App;
