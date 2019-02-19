import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const box1 = {
      image: "../images/icon1.png",
      heading: "Declarative",
      text: "React makes it painless to create interactive UIs"
    };
    const box2 = {
      image: "../images/icon2.png",
      heading: "Components",
      text: "Build encapsulated components that manage their state"
    };
    const box3 = {
      image: "../images/icon3.png",
      heading: "Single-Way",
      text: "A set of immutable values are passed to the components"
    };
    const box4 = {
      image: "../images/icon4.png",
      heading: "JSX",
      text: "Statically-typed, designed to run on modern browsers"
    };

    const elementDom = (
      <div>
        <h1>Say hello to ReactJS</h1>
        <h3>
          You will learn Frontend framework from scratch, to become a Ninja
          Developer.
        </h3>
      </div>
    );

    return (
      <div>
        <section class="title">
          <div className="App">
            {elementDom}
            <button class="button">Awesome!</button>
          </div>
        </section>

        <section class="boxes">
        <div class= "box">
          <img src={box1.image} />
          <h2>{box1.heading}</h2>
          <p>{box1.text}</p>
          </div>
          
          <div class= "box">
          <img src={box2.image} />
          <h2>{box2.heading}</h2>
          <p>{box2.text}</p>
          </div>

          <div class= "box">
          <img src={box3.image} />
          <h2>{box3.heading}</h2>
          <p>{box3.text}</p>
          </div>
          
          <div class= "box">
          <img src={box4.image} />
          <h2>{box4.heading}</h2>
          <p>{box4.text}</p>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
