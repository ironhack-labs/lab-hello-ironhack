import React, { Component } from "react";
import "./App.css";
import NavBar from "./navBar/navBar";
import Button from "./button/button";
import Card from "./card/card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <main>
          <h1>Say hello to ReactJS</h1>
          <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
          <Button action="Awesome!"></Button>
        </main>
        <section>
          <Card image="./images/icon1.png" title="Declarative" desc="React makes it painless ro create interactive UIs"></Card>
          <Card image='./images/icon2.png' title="Components" desc="Build encapsulated components that manage their state."></Card>
          <Card image='./images/icon3.png' title="Single-Way" desc="A set of inmutable values are passed to the component's"></Card>
          <Card image='./images/icon4.png' title="JSX" desc="Stactically-typed, designed to run on modern browsers."></Card>
        </section>
      </div>
    );
  }
}

export default App;
