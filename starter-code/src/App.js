import React, { Component } from "react";
import "./App.css";
import Card from '../components/Card'

class App extends Component {
  

  render() {   
      return (
        <div className="App">
        
        <div className="top-container">
        <nav className="nav-bar">
          <img src="/images/ironhack-logo.svg" alt="" />
          <img src="/images/menu-top.svg" alt="" />
        </nav>
        

          <h1> Say hello to ReactJS</h1>
          <p>You will learn a Frontend</p>
          <p>framwork from scrach, to</p>
          <p>become a Ninja Developer</p>
          <button>Awesome!</button>
        </div>
        
        

        <div className="card-container">
          <Card iconImage="../images/icon1.png" titleText="Declarative" descriptionText="React makes it painlees to create interactive UIs" />
          <Card iconImage="../images/icon2.png" titleText="Components" descriptionText="Build encapsulated components that manage ther state." />
          <Card iconImage="../images/icon3.png" titleText="Single-Way" descriptionText="A set of immutable values are passed to the component's" />
          <Card iconImage="../images/icon4.png" titleText="JSX" descriptionText="Statically-typed, designed to run on modern browsers." />
        </div>

        </div>


      
      );
    }
  }


export default App;