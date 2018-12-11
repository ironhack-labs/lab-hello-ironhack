import React, { Component } from "react";
import "../public/styles/styles.css"



class App extends Component {
  render() {
    return (
      <div>
      <div className="top">
        <img src="/images/ironhack-logo.svg"/>
        <h1 className="headClass">Say Hello to <br/>ReactJS</h1>
        <p>You will learn a frontend framework from scratch, to become a Ninja developer.</p>
        <button type="button">Awesome!</button>
      </div>
      <div className="pops">
        <article>
        <img src="/images/icon1.png"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UI's</p>
        </article>
        <article>
        <img src="/images/icon2.png"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
        <img src="/images/icon3.png"/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components</p>
        </article>
        <article>
        <img src="/images/icon4.png"/>
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers.</p>
        </article>
      </div>
      </div>
    )
  }
}

export default App;