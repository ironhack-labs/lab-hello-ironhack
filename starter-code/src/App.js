import React, { Component } from "react";
import "./App.css";
import Section from './components/Section.js';
import Header from './components/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section class="sections"> 
            <Section 
                img="./images/icon1.png"
                title="Declarative"
                description="React makes it painless to create interative Uls."
            />
            <Section 
                img="./images/icon2.png"
                title="Components"
                description="Build encapsulated components that manage their state."
                />
            <Section 
                img="./images/icon3.png"
                title="Single-Way"
                description="A set of immutable values are passed to the component's "
            />
            <Section 
                img="./images/icon4.png"
                title="JSX"
                description="Statically-typed, disegned to run on moderm browers"
                />
        </section>
      </div>
    );
  }
}

export default App;