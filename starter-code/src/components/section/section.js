import React, { Component } from "react";
import "../../App.css";


class Section extends Component {
  render() {
    return (
      <div className="noHeader">
<div>
  <img src="/images/icon1.png"></img>
  <h3>Declarative</h3>
  <p>React makes it painless to create interactive Uls.</p>
</div>
<div>
<img src="/images/icon2.png"></img>
  <h3>Components</h3>
  <p>Build encapsulated components that manage their state</p>
</div>
<div>
<img src="/images/icon3.png"></img>
  <h3>Single-Way</h3>
  <p>A set of immutable values are passed to the component's</p>
</div>
<div>
<img src="/images/icon4.png"></img>
  <h3>JSX</h3>
  <p>Statically-typed, designed to run on modern browsers</p>
</div>
</div> 
    
    );
  }
}

export default Section;
