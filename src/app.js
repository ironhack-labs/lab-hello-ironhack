import React from "react";
import "./index.css"


const App = () => {
  return (
    <div className = "App">
      <div className = "upper-container">
        <header>
         <img src="./images/ironhack-logo.svg"></img>
         <img src="./images/menu-top.svg"></img>
        </header>
        <div className = "landing-text"> 
          <h1> Say hello to <br></br>
          ReactJS</h1>
          <p>You will learn how to use <br></br>
          the most popular frontend library,<br></br>
          and become a super Ninja developer.</p>
        </div>
        <button>Awesome!</button>
        </div>
        <section className="features-container">
          <section className="features">
            <img src="./images/icon1.png" />
            <h2>Declarative</h2>
            <ul>
              <li>React makes it</li>
              <li>painless to create</li>
              <li>interactive UIs</li>
            </ul>
          </section>
          <section className="features">
            <img src="./images/icon2.png" />
            <h2>Components</h2>
            <ul>
              <li>Build encapsulated</li>
              <li>components that</li>
              <li>manage their state</li>
            </ul>

          </section>
          <section className="features">
            <img src="./images/icon3.png" />
            <h2>Single-Way</h2>
            <ul>
              <li>A set of immutable</li>
              <li>values are passed to</li>
              <li>the component's</li>
            </ul>

          </section>
          <section className="features">
            <img src="./images/icon4.png" />
            <h2>JSX</h2>
            <ul>
              <li>Statically-typed,</li>
              <li>designed to run on</li>
              <li>modern browsers</li>
            </ul>

          </section>
        </section>
    </div>
  )
};

export default App;