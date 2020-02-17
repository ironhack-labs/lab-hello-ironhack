import React from "react";
import "./App.css";
import Titles from "./titles"
import Component from "./component"

const App = () => {
    return (
      <div>
        <nav id="nav">
          <img src="/images/ironhack-logo.svg"></img>
          <img src="/images/menu-top.svg"></img>
        </nav>

        <div id="home">

          <div>
            <Titles h1="Say hello to ReactJS" h2="You will learn a Frontend framework from scratch, to become a Ninja Developer."/>
          </div>

          <button id="button">Awesome!</button>

        </div>

        <div id="footer">

          <Component image="/images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs"/>
          <Component image="/images/icon2.png" title="Components" description="Build encapsulated components that manage their state"/>
          <Component image="/images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's"/>
          <Component image="/images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browser"/>

        </div>


      </div>
    );
}

export default App