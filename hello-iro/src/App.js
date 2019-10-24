import React from "react";
import logoSrc from "./images/logao.svg";
import imgScr from "./images/menu-top.svg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import Card from "./components/Card";
import Presentation from "./components/Presentation";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="background">
        <NavBar
          parentClass="background navbar"
          logoClass="background"
          logoSrc={logoSrc}
          menuClass="background"
          menuSrc={imgScr}
        ></NavBar>
        <Presentation
          title="Say hello to ReactJS"
          description="You will learn a frontEnd
        framework from scratch,
        to become an Ninka developer"
          buttonTittle="Awesome"
        />
      </header>
      <div className="hero">
        <Card
          img={icon1}
          title="Declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Card
          img={icon2}
          title="Components"
          description="Build encapsulated components that manage their state"
        />
        <Card
          img={icon3}
          title="Single-way"
          description="A set of immutable values are passed to the components"
        />
        <Card
          img={icon4}
          title="JSX"
          description="A set of immutable values are passed to the componen"
        />
      </div>
    </div>
  );
};

export default App;
