import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
          <div className="App">
             <img src="/images/ironhack-logo.svg"></img>
             <img src="/images/menu-top.svg"></img>
             <img src="/images/react-logo.svg"></img>
             <h1> Say hello to ReactJS </h1>
             <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
          
      <section className="second-container">
                <div className="info">
                    <img src="/images/icon1.png" alt="Logo one"/>
                    <h3>Declarative</h3>
                    <p>React makes ot painless to create intereactive UIs</p>
                </div>
                <div className="info">
                    <img src="/images/icon2.png" alt="Logo one"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="info">
                    <img src="/images/icon3.png" alt="Logo one"/>
                    <h3>Single-way</h3>
                    <p>A set of immutable values are passed to the components</p>
                </div>
                <div className="info">
                    <img src="/images/icon4.png" alt="Logo one"/>
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browser</p>
                </div>
         </section>
         </div>
    );
  }
}

export default App;
