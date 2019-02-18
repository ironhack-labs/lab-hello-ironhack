import React, { Component } from "react";

import "./App.css";

// Our first React COMPONENT -> a class
// (a class that extends from React's Component class and defines some content)
class App extends Component {
  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    // render() returns the HTML of this component's content

    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling
      <section className="App container">
        <div className="background padding">
          <div className="navigation">
            <div>
              <img src="/images/ironhack-logo.svg" />
            </div>
            <div>
              <img src="images/menu-top.svg" />
            </div>
          </div>
          <div className="introduction">
            <div>
              <h1>Say hello to ReactJS</h1>
              <h6>
                You will learn a front-end
                <br /> framework from scratch, <br />
                to become a Ninja Developer.
              </h6>
              <button className="button">Awesome!</button>
            </div>
          </div>
        </div>
        <div className="row padding">
          <div className="col-3">
            <img className="icons" src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="col-3">
            <img className="icons" src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="col-3">
            <img className="icons" src="/images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the compoments.</p>
          </div>
          <div className="col-3">
            <img className="icons" src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statistically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </section>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;
