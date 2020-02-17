import React from "react";
import "./styles/App.css";
import Components from "./Components";

export default function App() {
  return (
    <div>
      <div className="blue-bg">
        <nav>
          <img src="/images/ironhack-logo.svg" alt="IronhackLogo" srcset="" />
          <img src="/images/menu-top.svg" alt="HamburgerMenu" />
        </nav>
        <div className="title">
          <h1>
            Say hello to <br />
            ReactJS
          </h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninjaa
            Developer.
          </p>
        </div>
        <button>Awesome!</button>
      </div>
      <div className="component-list">
        <Components
          image="/images/icon1.png"
          title="Declarative"
          infos="React makes it painless to create interactive UIs."
        />
        <Components
          image="/images/icon2.png"
          title="Components"
          infos="Build encapsulated components that manage their state."
        />
        <Components
          image="/images/icon3.png"
          title="Single-Way"
          infos="A set of immutable values ares passes to the component's"
        />
        <Components
          image="/images/icon4.png"
          title="JSX"
          infos="Statically-typed, design to run on modern browsers"
        />
      </div>
    </div>
  );
}
