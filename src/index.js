import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

ReactDOM.render(
  <div>
    <header>
      <nav>
        <img src="/images/ironhack-logo.svg" alt="Ironhack logo" />
        <img src="/images/menu-top.svg" alt="Menu logo" />
      </nav>
      <div id="title">
        <h1>
          Say hello to <br /> ReactJS
        </h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developper.
        </p>
      </div>
      <a href="#" id="btn-awesome">
        Awesome!
      </a>
    </header>
    <main>
      <div className="info">
        <div className="info-wrapper">
          <img src="/images/icon1.png" alt="Icon 1" className="info-img" />
          <h2 className="info-title">Declarative</h2>
          <p className="info-desc">
            React makes ot painless to create intereactive UIs
          </p>
        </div>
        <div className="info-wrapper">
          <img src="/images/icon2.png" alt="Icon 2" className="info-img" />
          <h2 className="info-title">Components</h2>
          <p className="info-desc">
            Build encapsulated components that manage their state
          </p>
        </div>
        <div className="info-wrapper">
          <img src="/images/icon1.png" alt="Icon 3" className="info-img" />
          <h2 className="info-title">Single-way</h2>
          <p className="info-desc">
            A set of immutable values are passed to the components
          </p>
        </div>
        <div className="info-wrapper">
          <img src="/images/icon1.png" alt="Icon 1" className="info-img" />
          <h2 className="info-title">JSX</h2>
          <p className="info-desc">
            Statically-typed designed to run on modern browser
          </p>
        </div>
      </div>
    </main>
  </div>,
  document.getElementById("root")
);
