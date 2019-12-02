import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Title from "./components/title";
import Button from "./components/button";
import Article from "./components/articles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-navbar">
          <Navbar img="images/ironhack-logo.svg" className="App-logo1"></Navbar>
          <Navbar img="images/menu-top.svg" className="App-logo2"></Navbar>
        </div>
        <div className="App-title">
          <Title
            title="Say Hello to ReactJS"
            subtitle="You will learn a Frontend framework form scratch, to become a Ninja Developer"
          ></Title>

          <Button action="Awesome!" />
        </div>
      </header>
      <div className="App-article">
        <Article
          img="images/icon1.png"
          title="Declarative"
          subtitle="React makes it painless to create intercative UIs."
        ></Article>
        <Article
          img="images/icon2.png"
          title="Components"
          subtitle="Build encapsulated components that manage their state."
        ></Article>
        <Article
          img="images/icon3.png"
          title="Single-Way"
          subtitle="A set of immutable values are passed to the components."
        ></Article>
        <Article
          img="images/icon4.png"
          title="JSX"
          subtitle="Statically-typed, designed to run on modern browser."
        ></Article>
      </div>
    </div>
  );
}

export default App;
