import React, { Component } from "react";
import "./App.css";
import Nav from "../src/menuTop/nav";
import Commet from "../src/menuTop/commet";
import Paragrahp from "./menuTop/paragrahp";
import Button from "./menuTop/button";
import Icon from "./menuTop/icon";

function App() {
  return (
    <>
      <div>
        <div className=" textWhite">
          <Nav />
          <div className="title">
            <Commet text="Say hello to" />
            <Commet text=" ReactJS" />
            
          </div>
          <Paragrahp text="You will learn a Frontend framework from scratch, to becaome an Ninka Developer" />
          <Button action="Awesome!" />
        </div>
      </div>
      <div className="textBlack">
        <div>
          <Icon src="images/icon1.png" />
          <Commet text="Declarative" />
          <Paragrahp text="React makes it painless to create interactive UIs." />
        </div>
        <div>
          <Icon src="images/icon2.png" />
          <Commet text="Components" />
          <Paragrahp text="Build encapsulated components that manage their state." />
        </div>
        <div>
          <Icon src="images/icon3.png" />
          <Commet text="Single-Way" />
          <Paragrahp text="A set of immutable values are passed to the component´s" />
        </div>
        <div>
          <Icon src="images/icon4.png" />
          <Commet text="JSX" />
          <Paragrahp text="Statically-typed designed to run on modern browsers." />
        </div>
      </div>
    </>
  );
}

export default App;
