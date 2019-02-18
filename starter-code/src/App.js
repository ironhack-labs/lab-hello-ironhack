import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Box from "./Box";

class App extends Component {
  render() {


    return (
      <div className="App">
        <img src="images/ironhack-logo.svg" alt="Logo" class="logo"/>
        <img src="images/menu-top.svg" alt="Logo" class="menu"/>
        <h1>Say Hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
  
      <Button text="Awesome!"/>
      
      <div className="Box">
      <Box img="/images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Box img="/images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
      <Box img="/images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the component's"/>
      <Box img="/images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/>
      </div>

      </div>



    );
  }
  
}






export default App;