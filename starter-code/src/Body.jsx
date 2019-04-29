import React, { Component } from 'react';
import Feature from './Feature';
import './Body.css';

export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Feature img="./images/icon1.png" detail="Declarative" description="React makes it painless to create interactive UIs." ></Feature>
        <Feature img="./images/icon2.png" detail="Components" description="Build encapsulated components that manage their state." ></Feature>
        <Feature img="./images/icon3.png" detail="Single-Way" description="A set of immutable values are passed to the component's" ></Feature>
        <Feature img="./images/icon4.png" detail="JSX" description="Statically-typed, designed to run on modern browsers." ></Feature>
      </div>
    )
  }
}
