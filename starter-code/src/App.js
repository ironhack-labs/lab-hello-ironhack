import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <div className="hero-text-container">
            <h1 className="hero-text-container__title">Say Hello to ReactJS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              itaque asperiores nostrum, sequi vitae nulla earum optio, deserunt
              at necessitatibus repudiandae odio, fugiat iste? Veritatis vitae
              minus dolorum omnis inventore?
            </p>
            <button className="hero-text-container__btn btn btn--white">
              Awesome
            </button>
          </div>
          <img className="floating-logo" src="/images/react-logo.svg" alt="" />
        </div>
        <div className="footer">
          <div className="footer__content-container">
            <img src="images/icon1.png" alt="" />
            <h3 className="footer__titles">Declarative</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae!
            </p>
          </div>

          <div className="footer__content-container">
            <img src="images/icon2.png" alt="" />
            <h3 className="footer__titles">Components</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus!
            </p>
          </div>

          <div className="footer__content-container">
            <img src="images/icon3.png" alt="" />
            <h3 className="footer__titles">Single-Way</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="footer__content-container">
            <img src="images/icon4.png" alt="" />
            <h3 className="footer__titles">JSX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, illum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
