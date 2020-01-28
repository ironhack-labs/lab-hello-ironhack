import React, { Component } from "react";
import "./App.css";

//import ihlogo from "../public/images/ironhack-logo.svg";

class App extends Component {
  render() {

    const logo = <img className="logo" src="../images/icon1.png" />
    //const logo = <img src={ihlogo} width='300' height='300' />

    const text = (
      <div>
      <h1 className="h1"> Say hello to </h1>
      <h1 className="h1">ReactJS</h1>
      <p className="p">You will learn a Frontend</p>
      <p className="p">framework from scratch, to</p>
      <p className="p">became a Ninja Developer.</p>
      </div>
    );

    const button = <button className="btn" >Awesome!</button>

    return (
      <div className="App">
        
        {text}
        {button}
      </div>
    );
  }
}

export default App;