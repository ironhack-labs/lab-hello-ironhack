import React, { Component } from 'react';
import Icon from './components/icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="home-header">
          <nav className="home-nav">
            <img className="ironhack-logo" src="../images/ironhack-logo.svg" alt="logo"/>
            <img className="home-menu" src="../images/menu-top.svg" alt="menu"/>
          </nav>
          <div className="home-description">
            <h1>Say hello to <br/>ReactJs</h1>
            <p>You will learn a Frontend <br/>framework from scratch, to <br/>become a Ninja Developer.</p>
          </div>
          <button>Awesome!</button>
        </header>
        <section className="home-icons-section">
          <Icon icons={"../images/icon1.png"} title={"Declarative"} description={"React makes it painless to create interactive UIs."}/>
          <Icon icons={"../images/icon2.png"} title={"Components"} description={"Build encapsulated components that manage their state."}/>
          <Icon icons={"../images/icon3.png"} title={"Single-Way"} description={"A set of inmutable values are passed to the components."}/>
          <Icon icons={"../images/icon4.png"} title={"JSX"} description={"Statically-typed, designed to run on modern browsers."}/>
        </section>
      </div>
    );
  }
}

export default App;
