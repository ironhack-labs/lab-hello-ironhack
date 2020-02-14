import React, { Component } from "react";
import "./App.css";
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <div className="CardsContainer">
          <Card url='/images/icon1.png' title='Declarative' description='React makes it painless to create interactive UIs'/>
          <Card url='/images/icon2.png' title='Components' description='Build encapsulated components that manage theri state.'/>
          <Card url='/images/icon3.png' title='Single-Way' description='A set of immutable values are passed to the comonents'/>
          <Card url='/images/icon4.png' title='JSX' description='Statically-typed designed to run on modern browsers'/>
        </div>
       
      </div>
    );
  }
}

export default App;