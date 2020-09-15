import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Container from "./components/Container"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Container img="/images/icon1.png" title="Declarative" text="React males it painless to create interactive UIs."/> 
        <Container img="/images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/> 
        <Container img="/images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the component's."/> 
        <Container img="/images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/> 
      </div>
    </div>
  );
}

export default App;
