import React from 'react';
import logo from './logo.svg';
import './App.css';
import Point from "./Point"
import Hero from "./Hero"

function App() {
  return (
    <div className="App">
      <div className="heroContainer">
        <div className="menuBar">
          <img className="menuIcon" src="./images/ironhack-logo.svg" alt="ironhack-logo"/>
          <img className="menuIcon" src="./images/menu-top.svg" alt="menu"/>
        </div>
        < Hero title="Say hello to ReactJS" sub="You will learn a frontend framework from scratch to become a Ninja Developer" />
        <button className="awesomeButton">Awesome!</button>
        {/* <img src="./images/react-logo.svg" className="App-logo" alt="logo" /> */}
      </div>
      <div className="points">
        < Point src="./images/icon1.png" heading="Declarative" txt="React makes if painless to create interactive UIs"/>
        < Point src="./images/icon2.png" heading="Components" txt="Build encapsulated components that render their state"/>
        < Point src="./images/icon3.png" heading="Single-Way" txt="A set of immutable values are passed to components"/>
        < Point src="./images/icon4.png" heading="JSX" txt="Statically-typed, designed to run on modern browsers"/>
      </div>
    </div>
  );
}

export default App;
