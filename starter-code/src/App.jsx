import React from "react";
import Item from "./components/Item";
import Hero from "./components/Hero";
// import "./styles/main.css";
import "./styles/styles.scss";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="hero d-flex flex-column">
          <Hero />
        </div>
        <div className="row mt-5 mx-auto" style={{ width: "90%" }}>
          <Item url="./images/icon1.png" title="Declarative">
            React makes it painless to create interactive UIs.
          </Item>
          <Item url="./images/icon2.png" title="Components">
            Build encapsulated components that manage their state.
          </Item>
          <Item url="./images/icon3.png" title="Single Way">
            A set of immutable values are passed to the components.
          </Item>
          <Item url="./images/icon4.png" title="JSX">
            Statically-typed, design to run on modern browsers.
          </Item>
        </div>
      </div>
    </React.Fragment>
  );
}
