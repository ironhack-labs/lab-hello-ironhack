import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <nav className="App-nav">
              <img
                src="/images/ironhack-logo.svg"
                className="Ironhack-logo"
                alt="logo"
              />
              <img src="/images/menu-top.svg" className="Menu-top" alt="menu" />
            </nav>

            <section className="App-section">
              <h1> Say hello to </h1>
              <h1> ReactJS </h1>

              <p>
                You will learn a Frontend
                <br />
                framework from scratch,to
                <br />
                become a Ninja Developer.
              </p>

              <a href="#" className="button">
                Awesome!
              </a>
            </section>
          </header>

          <footer className="App-footer">
            <div className="Cart">
              <img src="/images/icon1.png" className="icon" alt="icon1" />
              <h2>Declarative</h2>
              <p className="p-cart">
                React makes it painless to creat interactive UIs.
              </p>
            </div>

            <div className="Cart">
              <img src="/images/icon2.png" className="icon" alt="icon2" />
              <h2>Components</h2>
              <p className="p-cart">
                Build encapsulated components that manage their state.
              </p>
            </div>

            <div className="Cart">
              <img src="/images/icon3.png" className="icon" alt="icon3" />
              <h2>Single-Way</h2>
              <p className="p-cart">
                A set of immutable values are passed to the component's.
              </p>
            </div>
            
            <div className="Cart">
              <img src="/images/icon4.png" className="icon" alt="icon4" />
              <h2>JSX</h2>
              <p className="p-cart">
                Statically-typed designed to run on modern browsers.
              </p>
            </div>
                       
            
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
