import React, { Component } from "react";
import Nav from "./Nav";
import "./App.css";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Nav />
          <div className="mainContent">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super ninja developer.
            </p>
            <a href="">Awesome!</a>
          </div>
        </div>

        <div className="cardSection">
          <Card
            imgSrc="/images/icon1.png"
            title="Declarative"
            content="React makes it painless to create interactive UIs"
          />
          <Card
            imgSrc="/images/icon2.png"
            title="Components"
            content="Build encapsulated components that manage their state"
          />
          <Card
            imgSrc="/images/icon3.png"
            title="Single-Way"
            content="Asset of immutable values are passed to the components."
          />
          <Card
            imgSrc="/images/icon4.png"
            title="JSX"
            content="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default App;
