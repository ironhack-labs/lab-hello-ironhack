import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {

    const element = (
      <nav className="menu">
      <img src='/images/ironhack-logo.svg'/>
      <img className="menu-item" src='/images/menu-top.svg'/>
      </nav>
    );

    const section = (
      <section className="section-icons">
        <div className="row-icons">
          <img src='/images/icon1.png'/>
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
         </div>

         <div className="row-icons">
          <img src='/images/icon2.png'/>
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state. </p>
         </div>

         <div className="row-icons">
          <img src='/images/icon3.png'/>
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's.</p>
         </div>

         <div className="row-icons">
          <img src='/images/icon4.png'/>
          <h4>JSX</h4>
          <p>Statically-typed, designed to run on modern browsers.</p>
         </div>
      </section>

    );
   
    return (
      <div> 
        <section className="main">
        {element} 
        <div className="react-main">
          <h1> Say hello to ReactJS </h1>
          <p> 
            You will learn a Frontend framework from scratch, to become an Ninka Developer.
          </p>
          <p className="awesome"> Awesome! </p>
        </div>
        </section>
        {section}
      </div>
      );
  }
}

export default App;