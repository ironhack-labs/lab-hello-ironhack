import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.jsx";
import Title from "./components/Title.jsx";
import SubTitle from "./components/SubTitle.jsx";
import Button from "./components/Button.jsx";
import Infos from "./components/Infos.jsx";
import "./styles/index.css";


ReactDOM.render(
    <div>
      <div className="main">
        <Nav
        logo="/images/ironhack-logo.svg"
        menu="/images/menu-top.svg"
        />

        <Title text="Say hello to ReactJS" />
        <SubTitle text="You will learn a Frontend framework from scratch, to became a Ninja Developer." />

        <Button text="Awesome!" />
      </div>
        
      <div className="footer">
        <Infos
        img="/images/icon1.png"
        title="Declarative"
        text="React makes it paintless to create interactive UIs."
        />
        <Infos
        img="/images/icon2.png"
        title="Components"
        text="Build encapsulated components that manage their state."
        />
        <Infos
        img="/images/icon3.png"
        title="Single-Way"
        text="A set of immutable values are passed to the component's."
        />
        <Infos
        img="/images/icon4.png"
        title="JSX"
        text="Statically-typed, designes to run on modern browsers."
        />
      </div>
        
    </div>
  
  ,
  document.getElementById("root")
);