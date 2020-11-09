import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';
const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';


class App extends Component {
  render() {

    return (
      <div>
        <header>
            <nav>
                <ul>
                   <img src="../images/ironhack-logo.svg"/>
                   <img src="../images/menu-top.svg"/>
                </ul>
            </nav>
            <h1>Say Hello To ReactJS</h1>
            <h2>You will lear how to use the most popular frontend library, and become a super ninja developer.</h2>
            <button>Awesome!</button>
        </header>
        <div className = "card-cointainer">
        <Card
            imgsrc = {icon1}
            h2 = "Declarative"
            p="React makes it painless to create interactive UIs"
        />
        <Card 
            imgsrc = {icon2}
            h2 = "Components"
            p="Build encapsulted components that manage their state."
        /> 
         <Card 
            imgsrc = {icon3}
            h2 = "Single-Way"
            p="A set of immutable values are passed to the components"
        /> 
         <Card 
            imgsrc = {icon4}
            h2 = "JSX"
            p="Statically-typed, designed to run on modern browsers."

        /> 
        </div>
    </div>
    );
  }
}



export default App;
