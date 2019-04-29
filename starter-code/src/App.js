import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Button from "./Button/Button";
import Icons from "./Icons/Icons";

function App() {
  return (
    <div>
      <div className="first-page">
        <Header />
        <Main />
        <Button />
      </div>
      <div className="second-page">
        <Icons
          link="/img/icon1.png"
          name="Declarative"
          txt="React makes it painless to create interactive UIs"
        />
        <Icons
          link="/img/icon2.png"
          name="Components"
          txt="Build encapsulated components that manage their state"
        />
        <Icons
          link="/img/icon3.png"
          name="Single-Way"
          txt="A set of immutable values are passed to the components"
        />
        <Icons
          link="/img/icon4.png"
          name="JSX"
          txt="Statically-typed, designed to run on modern browsers"
        />
      </div>
    </div>
  );
}

export default App;
