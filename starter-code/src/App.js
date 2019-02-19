import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {

    function bloque(image,title, text) {

      return (
        <bloque className="bloque">
          <img src={image}/>
          <h2>{title}</h2>
          <p>{text}</p>
        </bloque>
      )
    }

    return (
      <div className="App">
      <div className="fondo">
        <div className="text">
        <h1> Say hello to ReactJS </h1>
        <p>You will learn a Fronted framwork from scratch, to becaome an Ninka Developer.</p>
        </div>
        <button>Awesome!</button>
      </div>
    <div className="linea">
        {bloque("/images/icon1.png","Declarative", "React makes it painless to create interactive UIs.")}
        {bloque("/images/icon2.png","Components", "Build encapsulated components that manage their state.")}
        {bloque("/images/icon3.png","Single-Way", "A set if immutabe values are passed to the component's.")}
        {bloque("/images/icon4.png","JSX", "Statically-typed, designed to run on modern browsers.")}
        </div>
      </div>
    );
  }
}

export default App;