import React, { Component } from "react";
import "./section.css";

class Section extends Component {
  render() {
    return (
      <section id="section">
        <div>
          <img src="../images/icon1.png" alt="img" />
          <h1>DECLARATIVE</h1>
          <p> react make it painless</p>
        </div>
        <div>
          <img src="../images/icon2.png" />
          <h1>COMPONENTS</h1>
          <p>
            Build encapsulated <br /> components that <br /> manage their state
          </p>
        </div>
        <div>
          <img src="../images/icon3.png" />
          <h1>SINGLE WAY</h1>
          <p>
            a set of immutable <br /> values are passed to <br /> the
            component's
          </p>
        </div>
        <div>
          <img src="../images/icon4.png" />
          <h1>JSX</h1>
          <p>
            Statically-typed <br />, designed to run on <br /> moder browser
          </p>
        </div>
      </section>
    );
  }
}
export default Section;
