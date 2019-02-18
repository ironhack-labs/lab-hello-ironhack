import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
      <img className="icon-iron" src={"/images/ironhack-logo.svg"}/>
      <img className="menu-top" src={"/images/menu-top.svg"}/>
        <section className="container">
          <h1>Say hello to ReactJS</h1>
          <h3>
            You will learn a Frontend framework from scratch, to become an Ninja
            Developer
          </h3>
          <button className="aw-btn">Awesome!</button>
        </section>
        </nav>
        
        <section className="compCards">
          <div>
          <img src={"/images/icon1.png"} />
          <h2>Declarative</h2>
          <p>React mix it painless to create interactive ULS</p>
          </div>
          <div>
          <img src={"/images/icon2.png"} />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
          <img src={"/images/icon3.png"} />
          <h2>Single-way</h2>
          <p>A set of inmutable values are passed to the components</p>
          </div>
          <div>
          <img src={"/images/icon4.png"} />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
