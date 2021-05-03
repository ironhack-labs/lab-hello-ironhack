import React from "react";
import Card from './Card'
import "./App.css";

const App = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <nav className="nav-bar">
          <img src="/images/ironhack-logo.svg"></img>
          <img src="/images/menu-top.svg"></img>
        </nav>
        <div className="header-banner">
          <h1 className="page-title">Say hello to ReactJS</h1>
          <h2 className="page-resume">
            You wil learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </h2>
        </div>
        <a className="button" href="#">
          Awesome!
        </a>
      </div>
      <div className="page-content">
        <Card title="Declarative" text="React makes it painless to create interactive UIs" image="/images/icon1.png"/>
        <Card title="Components" text="Build encapsulated components that manage their state" image="/images/icon2.png"/>
        <Card title="Single-Way" text="A set of immutable values are passed to the component's" image="/images/icon3.png"/>
        <Card title="JSX" text="Statically-typed, designed to run on modern browsers." image="/images/icon4.png"/>
      </div>
    </div>
  );
};

export default App;
