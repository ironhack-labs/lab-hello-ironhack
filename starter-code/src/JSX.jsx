import React, { Component } from "react";
import icon4 from "./icon4.png";
import "./Components.css";

class JSX extends Component {
  render() {
    return (
      <div className="JSX">
        <header className="Components-div">
          <article className="Components-article">
            <img src={icon4} className="Components-image " alt="icon" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to work on modern browsers.</p>
          </article>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default JSX;
