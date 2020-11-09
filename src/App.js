import React, { Component } from "react";
import Card from './Card';
import './App.css';
import Atom from './Atom';
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
    <div className="total">
    <div>
      <img className="logo" src={ihLogo}/>
      <div className="logos">
      <Atom
      className="one"
        imagen = {reactLogo}
      />
      <Atom 
      className="two"
        imagen = {reactLogo}
      />
      <Atom 
      className="three"
        imagen = {reactLogo}
      />
      <Atom 
      className="four"
        imagen = {reactLogo}
      />
      <Atom 
      className="five"
        imagen = {reactLogo}
      />
      </div>
    </div>
    <div>
      <h1>Say hello to<br></br> ReactJS</h1>
      <p>
      You will learn how to use the most popular frontend library, 
      and become a super Ninja developer.
      </p>
    </div>
    <div>
    <div className="awesome">
      <p>Awesome!</p>  
    </div>
   
    </div>
    </div>
    <div className="Tomalo">
      <Card 
        img = {icon1}
        h2 = 'Declarative'
        p = 'React makes it painless to create interactive UIs'
       />
       <Card 
        img = {icon2}
        h2 = 'Components'
        p = 'Build encapsulated components that manage state'
       />
       <Card 
        img = {icon3}
        h2 = 'Single-Way'
        p = "A set of immutable values are passed to the component's."
       />
       <Card 
        img = {icon4}
        h2 = 'JSX'
        p = 'Statically-typed, designed to run on modern browsers.'
       />
       </div>
  </div>
  
    );
    
  }
}

export default App;
