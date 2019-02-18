import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {" "}
        <header>
          <img src="../images/ironhack-logo.svg" />
          <img src="../images/menu-top.svg" />
        </header>
        <section className="main">
          <div className="main-text">
            <h1>
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn a Frontend <br /> framework from scratch, to <br />{" "}
              become an Ninja developer.
            </p>
            <button type="button" className="btn btn-primary">
              Awesome!
            </button>
          </div>
          <div className="img-col-1">
            <img id="c1r1" src="../images/react-logo.svg" />
            <img id="c1r2" src="../images/react-logo.svg" />
            <img id="c1r3" src="../images/react-logo.svg" />
          </div>
          <div className="img-col-2">
            <img id="c2r1" src="../images/react-logo.svg" />
            <img id="c2r2" src="../images/react-logo.svg" />
            <img id="c2r3" src="../images/react-logo.svg" />
          </div>
        </section>
        <section className="reasons">
          <div className="one-reason">
            <img src="../images/icon1.png" />
            <h2>Declarative</h2>
            <p>
              React makes it <br />
              painless to create <br /> interactive UIs.
            </p>
          </div>
          <div className="one-reason">
            <img src="../images/icon2.png" />
            <h2>Components</h2>
            <p>
              Build encapsulated <br /> components that <br /> manage their
              state.
            </p>
          </div>
          <div className="one-reason">
            <img src="../images/icon3.png" />
            <h2>Single-Way</h2>
            <p>
              A set of immutable <br /> values are passed to <br /> the
              component's
            </p>
          </div>
          <div className="one-reason">
            <img src="../images/icon4.png" />
            <h2>JSX</h2>
            <p>
              Statically-typed, <br /> designed to run on <br /> modern
              browsers.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
