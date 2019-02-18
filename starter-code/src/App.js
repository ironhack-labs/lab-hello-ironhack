import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container ">
        <section id="sectionOne">
          <nav id="navbar">
            <img src="/images/ironhack-logo.svg" />
          </nav>

          <div id="title">
            <h1>Say Hello to ReactJS</h1>
          </div>
          <div id="content">
            <p>
              You will learn a Frontend Framework from scratch, to became an
              Ninja Developer
            </p>
          </div>
          <button id="btn">Awewome!</button>
        </section>
        <section id="img">
          <div id="images">
            <div className="iconContent">
              <img src="/images/icon1.png" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="iconContent">
              <img src="/images/icon2.png" />
              <h2>Component</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="iconContent">
              <img src="/images/icon3.png" />
              <h2>Single Way</h2>
            </div>
            <div className="iconContent">
              <img src="/images/icon4.png" />
              <h2>JSX</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
