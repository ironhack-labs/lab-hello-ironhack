import React from "react";
import "./App.css";
import Logo from "./React-logo/React-logo";
import Text from "./text/text";
import Icon from "./icons/Icon";
import Button from "./Button/button";
import Header from "./header/header";

function App() {
  return (
    <div className="App">
      <div className="appcontainer">
        <Header />
        <Text />
        <Button />

        <div className="react-logo">
          <Logo />
        </div>
      </div>
      <div class="icon-Container">
        <Icon
          img="../img/icon1.png"
          title="Declarative"
          txt="React makes it painless to create interactive UIs."
        />
        <Icon
          img="./img/icon2.png"
          title="Components"
          txt="Build encapsulated components that manage their state."
        />
        <Icon
          img="./img/icon3.png"
          title="Single-Way"
          txt="A set of immutable values are passed to the components."
        />
        <Icon
          img="./img/icon4.png"
          title="JSX"
          txt="Statically-type, design to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
