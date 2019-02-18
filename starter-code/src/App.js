import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    function columns(image, title, text) {
      return (
        <columns className="column">
          <img src={image} />
          <h1> {title} </h1>
          <p>{text}</p>
        </columns>
      );
    }

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
          {columns(
            "/images/icon1.png",
            "Declative",
            "React makes it painless to create interactive Uls."
          )}
          {columns(
            "/images/icon2.png",
            "Components",
            "Build encapsulated components that manage their state."
          )}
          {columns(
            "/images/icon3.png",
            "Single-Way",
            "A set of inmutable values are passed to the component´s."
          )}
          {columns(
            "/images/icon4.png",
            "JSX",
            "Statically-typed, designed to run on modern browsers."
          )}
        </div>
      </div>
    );
  }
}

export default App;
