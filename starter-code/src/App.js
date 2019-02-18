import React, { Component } from "react";
import "./App.css"; 
import NavBar from "./components/navbar/NavBar";
import Content from "./components/content/Content";
import Characteristics from "./components/characteristics/Characteristics";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Content/>
        <div className="characteristics-container">
          <Characteristics img="/images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
          <Characteristics img="/images/icon2.png" title="Components" text="Build encapsulated components that mange their state."/>
          <Characteristics img="/images/icon3.png" title="Signle-way" text="A set of inmutable  values are passed to the component's."/>
          <Characteristics img="/images/icon4.png" title="JSX" text="Statically-typed, design to run on modern browsers."/> 
        </div>
      </div>
    );
  }
}

export default App;