import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="info-card">
          <img src="images/icon1.png" alt="" />
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className="info-card">
          <img src="images/icon2.png" alt="" />
          <h1>Components</h1>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="info-card">
          <img src="images/icon3.png" alt="" />
          <h1>Single-Way</h1>
          <p>A set immutable values are passed to the component's.</p>
        </div>

        <div className="info-card">
          <img src="images/icon4.png" alt="" />
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    )
  }
}
