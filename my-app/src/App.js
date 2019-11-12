import React from "react";
import ironhackLogo from "./images/ironhack-logo.svg";
import menuTop from "./images/menu-top.svg";
import declarative from "./images/icon1.png";
import components from "./images/icon2.png";
import single from "./images/icon3.png";
import jsx from "./images/icon4.png";
import reactlogo from "./images/react-logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <section className="header">
        <div className="header-menu">
          <img src={ironhackLogo} className="Ironhack-logo" alt="logo" />
          <img src={menuTop} className="menu-icon" alt="logo" />
        </div>
        <div className="header-message">
          <h1>Say hello to React JS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become an Ninja
            developer.
          </p>
        </div>
        <div className="header-btn">
          <button>Awesome</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <img className="feature-img" src={declarative} />
          <h2 className="feature-title">Declarative</h2>
          <p className="feature-x">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="feature">
          <img className="feature-img" src={components} />
          <h2 className="feature-title">Components</h2>
          <p className="feature-x">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="feature">
          <img className="feature-img" src={single} />
          <h2 className="feature-title">Single-Way</h2>
          <p className="feature-x">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="feature">
          <img className="feature-img" src={jsx} />
          <h2 className="feature-title">JSX</h2>
          <p className="feature-x">
            React makes it painless to create interactive UIs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
