import React, { Component } from "react";

import "./Row.css";
export default class Row extends Component {
  render() {
    return (
      <div className="row-container">
        <div className="card">
          <img src="/images/icon1.png" alt="" />
          <div className="card-text">
            <h2>Declarative</h2>
            <p>
              React makes it <br />
              painless to create <br />
              interactive UIs.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/icon2.png" alt="" />
          <div className="card-text">
            <h2>Components</h2>
            <p>
              Build encapsulated <br />
              components that <br />
              manage their state.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/icon3.png" alt="" />
          <div className="card-text">
            <h2>Single-Way</h2>
            <p>
              A set of immutable <br />
              values are passed to <br />
              the component’s.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/icon4.png" alt="" />
          <div className="card-text">
            <h2>JSX</h2>
            <p>
              Statically-typed, <br />
              designed to run on <br />
              modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
