import React, { Component } from "react";
import logo from './logo.svg';
import Title from './Title';
import Button from './Button';
import Article from './Article';
import Card from './Card';
import Icon from './Icon';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ironHack from './images/ironhack-logo.svg'
import react from './images/react-logo.svg'


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
          <Icon src={ironHack} name={"Ironhack Logo"} />
          <Icon src={react} name={"React Logo"} />
        </div>
        <div className="articlebg">
        <Article name="Say hello to ReactJS" paragraph="You will learn how to use the most popular frontend library, and become a super Ninja developer." />
        </div>
      </div>
      <div className="cards">
        <Card name="Declarative" src={icon1} paragraph={"React makes it painless to create interactive UIs."} />
        <Card name="Components" src={icon2} paragraph={"Build encapsulated components that manage their state"} />
        <Card name="Single-Way" src={icon3} paragraph={"A set of immuytable values are passed to the component's"} />
        <Card name="JSX" src={icon4} paragraph={"Statistically-typed, designed to run on modern browsers."} />
      </div>
    </div>

  );
}

export default App;
