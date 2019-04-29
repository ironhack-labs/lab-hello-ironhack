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
      </div>
      <div className="react-logo">
        <Logo />
      </div>

      <div class="Icon-Container">
        <Icon
          img="../images/icon1.png"
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Icon
          img="../images/icon2.png"
          title="Components"
          description="Build encapsulated components that manage their state!"
        />
        <Icon
          img="../images/icon3.png"
          title="Single-Way"
          description="A set of immutable values are passed to the components."
        />
        <Icon
          img="../images/icon4.png"
          title="JSX"
          description="Statically-type, design to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
