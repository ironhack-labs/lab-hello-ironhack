import React, { Component } from "react";
import "./App.css";

class Image extends Component {
  render() {
    return <div className="secondDiv">
        <div>
          <img src="images/icon1.png" />
          <h3>Declarative</h3>
          <p>React makes painless to create interactive UIs</p>
        </div>
        <div>
          <img src="images/icon2.png" />
          <h3>Comparative</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src="images/icon3.png" />
          <h3>Single Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img src="images/icon4.png" />
          <h3>Jsx</h3>
        <p>Static typed , designed to run on modern browsers</p>
        </div>
      </div>;
  }
}

export default Image;