import React, { Component } from "react";
import icon1 from "./icon1.png";
import "./Components.css";

class Declarative extends Component {
  render() {
    return (
      <div className="Declarative">
        <header className="Components-div">
          <article className="Components-article">
            <img src={icon1} className="Components-image" alt="icon" />
            <h4>Declarative</h4>
            <p>Makes it painless to create interactive UIs.</p>
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

export default Declarative;
