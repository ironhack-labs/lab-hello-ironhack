import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import Title from "./components/Title/title.component";
import Subtitle from "./components/Subtitle/subtitle.component";
import Button from "./components/Button/button.component";
import Card from "./components/Card/card.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar
            logo="../images/ironhack-logo.svg"
            menu="../images/menu-top.svg"
          />
          <Title text="Say hello to ReactJS" />
          <Subtitle text="You will learn a Frontend framework from scratch, to become a Ninja Developer." />
          <Button text="Awesome!" />
        </header>
        <section>
          <div className="card-container">
            <Card
              src="../images/icon1.png"
              title="Declarative"
              text="React makes it painless to create interactive UIs."
            />
            <Card
              src="../images/icon2.png"
              title="Components"
              text="Build encapsulated components that manage their sate."
            />
            <Card
              src="../images/icon3.png"
              title="Single-Way"
              text="A set of immutable values are passed to the component's"
            />
            <Card
              src="../images/icon4.png"
              title="JSX"
              text="Statically-typed, designed to run on modern browsers."
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
