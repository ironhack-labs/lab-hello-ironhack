import React, { Component } from "react";
import "./App.css";
import Other from "./Other"

class App extends Component {
  render() {
    return (



      <div className="App">

      <div className="navbar">

<div className = "logo">
      <img src="/images/ironhack-logo.svg"/>
      </div>

      <div className = "menu">
      <img src="/images/menu-top.svg"/>
      </div>

            <div className = "react-logo">
      <img src="/images/react-logo.svg"/>
      </div>


      </div>

      <div className="top">
        <h1> Say hello to <br/> ReactJS</h1>
        <p>You will learn a Frontend framework from scratch,
          to become a Ninka Developer.
        </p>
        <button>Awesome!</button>
        </div>

<Other></Other>


<div className="all-cards">

<div className="card">
<img src="./images/icon1.png"/>
<h2>Declarative</h2>
<a>React makes it painless to create interactive UIs.</a>
</div>
<div className="card">
<img src="./images/icon2.png"/>
<h2>Components</h2>
<a>Build encapsulated components that manage their state.</a>
</div>
<div className="card">
<img src="./images/icon3.png"/>
<h2>Single-Way</h2>
<a>A set of immutable values are passed to the components</a>
</div>
<div className="card">
<img src="./images/icon4.png"/>
<h2>JSX</h2>
<a>Statically-typed. Designed to run on modern browsers.</a>
</div>


</div>




      </div>








    );
  }
}

export default App;
