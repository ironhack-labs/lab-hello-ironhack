import React, { Component } from "react";

import "./App.css"

import Articles from "../components/articles"

class App extends Component {


  render() {




    return (
      <main>
        <header className="hero" >
          <nav className="nav-bar">
            <img src="./images/ironhack-logo.svg" alt="logo ironhack" />
            <img src="./images/menu-top.svg" alt="logo menu" />
          </nav>
          <div className="title">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a frontend framework from scratch, to become a Ninja Developer.</p>
          </div>
          <a href="#">Awesome!</a>
        </header >

        <section className="details">

          <Articles pic="./images/icon1.png" title="Declarative" description="React makes it painless to create interactive Uls." />
          <Articles pic="./images/icon2.png" title="Components" description="Build encapsulate components that manage their state." />
          <Articles pic="./images/icon3.png" title="Single-way" description="Asset of inmutable values are passed to the components." />
          <Articles pic="./images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers" />

        </section>
      </main>


    )
  }
}
export default App