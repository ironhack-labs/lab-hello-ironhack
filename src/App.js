import React from 'react';
import Nav from './NavComponent';
import "./App.css"
import SayHello from './SayHelloComponent';
import Card from "./CardComponent";

const App = ()=>{
  return (
    <div className="generalDiv">
      <div className="blue-div">
        <div className="inside">
          <Nav />
          <SayHello />
        </div>
      </div>
      <div className="card-container">
        <Card
          cardImage={'../images/icon1.png'}
          cardTitle="Declarative"
          cardDescription="React makes it painless to create interactive UIs."
        />
        <Card
          cardImage={'../images/icon2.png'}
          cardTitle="Components"
          cardDescription="Build encapsulated components that manage their state."
        />
        <Card
          cardImage={'../images/icon3.png'}
          cardTitle="Single-Way"
          cardDescription="A set of inmutable values are passed to the component's."
        />
        <Card
          cardImage={'../images/icon4.png'}
          cardTitle="JSX"
          cardDescription="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
