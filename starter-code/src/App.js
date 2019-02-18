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
              <p>Declarative</p>
            </div>
            <div className="iconContent">
              <img src="/images/icon2.png" />
              <p>Component</p>
            </div>
            <div className="iconContent">
              <img src="/images/icon3.png" />
              <p>Single Way</p>
            </div>
            <div className="iconContent">
              <img src="/images/icon4.png" />
              <p>JSX</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
