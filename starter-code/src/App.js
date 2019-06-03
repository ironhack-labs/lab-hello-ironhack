import React, { Component } from "react";

import "./App.css"

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

          <article>
            <header>
              <img src="./images/icon1.png" />
              <h3>Declarative</h3>
            </header>
            <p>React makes it painless to create interactive Uls.</p>
          </article>

          <article>
            <header>
              <img src="./images/icon2.png" />
              <h3>Componenets</h3>
            </header>
            <p>Build encapsulate components that manage their state.</p>
          </article>

          <article>
            <header>
              <img src="./images/icon3.png" />
              <h3>Single-way</h3>
            </header>
            <p>Asset of inmutable values are passed to the components.</p>
          </article>

          <article>
            <header>
              <img src="./images/icon4.png" />
              <h3>JSX</h3>
            </header>
            <p>Statically-typed, designed to run on modern browsers</p>
          </article>

        </section>
      </main>


    )
  }
}
export default App