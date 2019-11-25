import React, { Component } from "react";
import HeaderMain from "./HeaderMain";
import Menu from "./Menu";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";
import Icon from "./Icon";

class App extends Component {
  render() {
    return (
      <div class="header-main">
        <HeaderMain />
        <Menu />
        <div class="main">
          <Title />
          <Subtitle />
          <Button />
        </div>
        <div class="description">
          <Icon
            icon="images/icon1.png"
            subtitle="Declarative"
            legend="React makes it painless to create interact UIs"
          />
          <Icon
            icon="images/icon2.png"
            subtitle="Components"
            legend="Build encapsulated components that manage their state"
          />
          <Icon
            icon="images/icon3.png"
            subtitle="Single-Way"
            legend="A set of immutable values are passed to the component's"
          />
          <Icon
            icon="images/icon4.png"
            subtitle="JSX"
            legend="Statically-typed, designed to run on modern browsers"
          />
        </div>
      </div>
    );
  }
}

export default App;
