import React, { Component } from "react";
import icon2 from "./icon2.png";
import "./Components.css";

class Components extends Component {
  render() {
    return (
      <div className="Components">
        <header className="Components-div">
          <article className="Components-article">
            <img src={icon2} className="Components-image" alt="icon" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
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

export default Components;
