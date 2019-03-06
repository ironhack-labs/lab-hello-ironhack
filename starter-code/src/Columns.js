import React, { Component } from "react";
import "./App.css";

class Columns extends Component {
  render() {
    return (
      <div className="Columns content">
        <div className="fourColumns">
          <img src='/images/icon1.png'/>
          <h3>Declarative</h3>
          <small>React makes it painless to create interactive UIs</small>
        </div>

        <div className="fourColumns">
          <img src='/images/icon2.png'/>
          <h3>Components</h3>
          <small>Build encapsulated components that manage their state</small>
        </div>

        <div className="fourColumns">
          <img src='/images/icon3.png'/>
          <h3>Single-Way</h3>
          <small>A set of immutable values are passed to the components</small>
        </div>

        <div className="fourColumns">
          <img src='/images/icon4.png'/>
          <h3>JSX</h3>
          <small>Statically-typed designed to run on modern browsers</small>
        </div>

      </div>
    );
  }
}

export default Columns;