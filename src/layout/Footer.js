import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div class="pics">

          <div class="colum">
            <img src="images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>

          <div class="colum">
            <img src="images/icon2.png"></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div class="colum">
            <img src="images/icon3.png"></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>

          <div class="colum">
            <img src="images/icon4.png"></img>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;