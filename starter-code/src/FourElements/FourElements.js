import React, { Component } from "react";
import "./FourElements.css"

export default class FourElements extends Component {
  render() {
    return (
      <div id="elements-container">
        <div className="element">
          <img src="../images/icon1.png" />
          <h2>Declarative</h2>
          <p className="little-paragraph">React makes it painless to create interactive UIs.</p>
        </div>
        <div className="element">
          <img src="../images/icon2.png" />
          <h2>Components</h2>
          <p className="little-paragraph">Build encapsulated components that manage their state.</p>
        </div>
        <div className="element">
          <img src="../images/icon3.png" />
          <h2>Single-way</h2>
          <p className="little-paragraph">Asset of inmutable values are passed to the component's</p>
        </div>
        <div className="element">
          <img src="../images/icon4.png" />
          <h2>JSX</h2>
          <p className="little-paragraph">Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
}
