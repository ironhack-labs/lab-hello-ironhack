import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <section className="section_one">
          <img src="./images/ironhack-logo.svg"></img>
          <div className="section_one_content">
            <h1 className="section_one_title">Say hello to ReactJS</h1>
            <p className="section_one_text">
              You wll learn how to use the most popular frontend library, and
              become a super Ninja developer
            </p>
          </div>
          <p className="section_one_rectangle">
            <a className="section_one_rectangle_text">Awesome!</a>
          </p>
        </section>
        <section className="section_two">
          <ul>
            <li>
              <h1>Declarative</h1>
              <p>React makes it painless to create interactive UIs</p>
            </li>
            <li>
              <h1>Components</h1>
              <p>Build encapsulated components that mange their state</p>
            </li>
            <li>
              <h1>Single-Way</h1>
              <p>A set of immutable values are passed to the component's.</p>
            </li>
            <li>
              <h1>JSX</h1>
              <p>Statically-typed, designed to run on mordern browsers.</p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
