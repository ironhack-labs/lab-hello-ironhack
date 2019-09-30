import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <img
          className="react-logo"
          src="../images/react-logo.svg"
          alt="React Logo"
        />
        <nav>
          <a href="#">
            <img src="../images/ironhack-logo.svg" alt="Ironhack Logo" />
          </a>

          <a href="#">
            <img src="../images/menu-top.svg" alt="Hamburguer Menu" />
          </a>
        </nav>

        <section>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend <br />
            framework from scratch, to <br />
            become a Ninja Developer
          </p>
          <a href="#">Awesome!</a>
        </section>
        </div>

        <div className="container features">
          <article>
            <ul>
              <li>
                <img src="../images/icon1.png" alt="icon img" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
              </li>
              <li>
                <img src="../images/icon2.png" alt="icon img" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their states.</p>
              </li>
              <li>
                <img src="../images/icon3.png" alt="icon img" />
                <h2>Single-Way</h2>
                <p>A set of inmutable valures are passed to the component's.</p>
              </li>
              <li>
                <img src="../images/icon4.png" alt="icon img" />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
