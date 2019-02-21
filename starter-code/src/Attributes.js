import React, { Component} from "react";
import "./App.css";

class Attributes extends Component{
  render(){
    return(
      <div className="multiple-logos">
        <div id="element">
          <img src="../images/icon1.png"></img>
            <br /> <h3>Declarative</h3>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
        </div>
        <div id="element">
          <img src="../images/icon2.png"></img>
          <br /> <h3>Components</h3>
          <p>Build encapsulated <br/> components that <br/> mange their state</p>
        </div>
        <div id="element">
          <img src="../images/icon3.png"></img>
          <br /> <h3>Single-Way</h3>
          <p>A set of inmutable <br/> values and passed to <br/> the components</p>
        </div>
        <div id="element">
          <img src="../images/icon4.png"></img>
          <br /> <h3>JSX</h3>
          <p>Statically-typed, <br/> designed to run on <br/> modern browsers</p>
        </div>
      </div>
    )
  }
}

export default Attributes;