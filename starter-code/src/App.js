import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="nav">
          <img src="./images/ironhack-logo.svg"></img>
          <img src="./images/menu-top.svg"></img>
        </nav>
        <section> 
          <h1>Say hello to ReactJS </h1>
          <h3>You will learn a Frontend
          framework from scratch, to
          becaome an Ninka Developer.</h3>
          <button>Awesome!</button>
        </section>
        <section>
          <img src="./images/icon1.png"></img>
          <h2>Declarative</h2>
          <h4>React make it painless create interactive UIs.</h4>
          <img src="./images/icon2.png"></img>
          <h2>Components</h2>
          <h4>Build encapsulated Components that manage their state.</h4>
          <img src="./images/icon3.png"></img>
          <h2>Single-Way</h2>
          <h4> A set of immutable values are passed to the Component's.</h4>
          <img src="./images/icon4.png"></img>
          <h2>JSX</h2>
          <h4>Statically-typed, designed to run on modern browsers.</h4>
        </section>
      </div>
    );
  }
}

export default App;