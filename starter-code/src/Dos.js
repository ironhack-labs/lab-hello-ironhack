import React, { Component } from "react";
import "./App.css";
import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";
import icon4 from "../public/images/icon4.png";

class Dos extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          <div>
            <img src={icon1} className="img_S" alt="logo" />
            <h1>Declarative</h1>
            <p className="text_Card">React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src={icon2} className="img_S" alt="logo" />
            <h1>Components</h1>
            <p className="text_Card">Build encapsulate components that manage their state.</p>
          </div>
          <div>
            <img src={icon3} className="img_S" alt="logo" />
            <h1>Single-Way</h1>
            <p className="text_Card">A set of inmutable values are passed to the component´s.</p>
          </div>
          <div>
            <img src={icon4} className="img_S" alt="logo" />
            <h1>JSX</h1>
            <p className="text_Card">Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dos;
