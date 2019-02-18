import React, { Component } from "react";
import "./App.css";
import Columns from "./Columns";

class App extends Component {
  render() {
    return (
      <div>
        <div className="section1">
          <nav className="containerNav">
            <img src="../images/ironhack-logo.svg" />
            <img src="../images/menu-top.svg" />
          </nav>
          <div className="title">
            <h1>
              Say hello to
              <br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend
              <br />
              framwork from scratch, to
              <br />
              becaome an Ninka Developer.
            </p>
            <button className="awesome">Awesome!</button>
          </div>
        </div>
        <div className="section2">
          <Columns
            image="/images/icon1.png"
            title="Declative"
            text="React makes it painless to create interactive Uls."
          />

          <Columns
            image="/images/icon2.png"
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <Columns
            image="/images/icon3.png"
            title="Single-Way"
            text="A set of inmutable values are passed to the component´s."
          />
          <Columns
            image="/images/icon4.png"
            title="JSX"
            text="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default App;
