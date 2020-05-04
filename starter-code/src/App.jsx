import React, { Component } from "react";
import "./styles/App.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div>
      <section className="main">
        <Navbar/>
        <Hero/>
      </section>
      <section className="showcase">
        <div className="card__container">
        <Card img='/images/icon1.png' title='Declarative' text='React makes it painless to create interactive UIs.' ></Card>
        <Card img='/images/icon2.png' title='Components' text='Build encapsulated components that manage their state.' ></Card>
        <Card img='/images/icon3.png' title='Single-Way' text='A set of immutable values are passed to the components.' ></Card>
        <Card img='/images/icon4.png' title='JSX' text='Statically-typed, designed to run on modern browsers.' ></Card>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
