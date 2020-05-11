import React from "react";

import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <img src="../images/ironhack-logo.svg" alt="logo" />
            <img src="../images/menu-top.svg" alt="menu" />
          </nav>
        </header>

        <section className="container">
          <article>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer
            </p>
            <a href="#">Awesome!</a>
          </article>
        </section>

        <section className="container-infos">
          <article className="container-icons">
            <img src="../images/icon1.png" alt="Declarative" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </article>

          <article className="container-icons">
            <img src="../images/icon2.png" alt="Components" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </article>

          <article className="container-icons">
            <img src="../images/icon3.png" alt="Single-Way" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </article>

          <article className="container-icons">
            <img src="../images/icon4.png" alt="JSX" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
