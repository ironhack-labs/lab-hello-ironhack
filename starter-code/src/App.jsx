import React, { Component } from 'react';
import AppStyle from "./AppStyle.css"

function App() {
  return (
    <div className="App">
      <section className="container-blue">

        <nav className="navbar navbar-light bg-transparent">
          <img src="/images/ironhack-logo.svg" alt="ironhack logo" width="50" height="50" />
          <img src="/images/menu-top.svg" alt="ironhack logo" width="30" height="30" />
        </nav>

        <div className="row text-center">
          <div className="col-12 col-md-12">
            <h1 className="display-3">Hello ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to becaome an Ninja Developer</p>
            <div className="button-link">
              <a href="/">Awesome!</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container container-white">
        <div className="row text-center">
          <div className="col-12 col-md-3">
            <img src="/images/icon1.png" alt="" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="col-12 col-md-3">
            <img src="/images/icon2.png" alt="" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="col-12 col-md-3">
            <img src="/images/icon3.png" alt="" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="col-12 col-md-3">
            <img src="/images/icon4.png" alt="" />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </div>
        {/* <small>
          Developer:
          <a href="http://github.com/diegormedia">Diego Ramos</a>
        </small> */}
      </section>
    </div>
  );
}

export default App;
