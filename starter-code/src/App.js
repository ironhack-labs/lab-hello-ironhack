import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
  <div className="nav">
  <img src="/images/ironhack-logo.svg" width="50" />
  <img src="/images/menu-top.svg"  />
  </div>
<div className="bg-1">

        <h1> Say hello to
          <br /> ReactJS </h1>
        <h2> You will learn a Front-end
          <br />framework from scratch, to
          <br />become an Ninka Developer.
        </h2>
        <button>Awesome!</button>
      </div>
    

<div className="icons">

<div>
  <div><img src="/images/icon1.png" />
  </div>
  <div className="title">Declarative</div>
<div className="description">React makes it painless to create interactive UIs.</div>
</div>

<div>
  <div><img src="/images/icon2.png" />
  </div>
  <div className="title">Components</div>
<div className="description">Build encapsulated components that manage their state.</div>
</div>

<div>
  <div><img src="/images/icon3.png" />
  </div>
  <div className="title">Single-Way</div>
<div className="description">A set of immutable values are passed to the componente's</div>
</div>

<div>
  <div><img src="/images/icon4.png" />
  </div>
  <div className="title">JSX</div>
<div className="description">Statically-typed, designed to run on modern browsers.</div>
</div>




  </div>


  </div>


    );
  }
}

export default App;