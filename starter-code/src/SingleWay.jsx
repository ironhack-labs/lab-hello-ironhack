import React, { Component } from "react";
import icon3 from "./icon3.png";
import "./Components.css";

class SingleWay extends Component {
  render() {
    return (
      <div className="SingleWay">
        <header className="Components-div">
          <article className="Components-article">
            <img src={icon3} className="Components-image" alt="icon" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
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

export default SingleWay;
