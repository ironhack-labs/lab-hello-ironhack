import React, { Component } from "react";
import "./App.css";
import Card from "../Card/Card.js";
class App extends Component {

  elements = [{
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
    img: "./images/icon1.png",
  }, 
{
  title: "Components",
  description:"Build encapsulated components that manage their state.",
  img: "./images/icon2.png"
},
{
  title: "Single-Way",
  description:"A set of inmutable values are passed to the component's.",
  img: "./images/icon3.png"
},
{
  title: "JSX",
  description:"Starically-typed, designed to run on modern browsers.",
  img: "./images/icon4.png"
},
]
  render() {
    let cards = this.elements.map(element => 
      <Card title={element.title} img={element.img} description={element.description}/>
    );
    return (
      <div className="App">
      <header>
        <div className="navbar"><img src="./images/ironhack-logo.svg"></img><img src="./images/menu-top.svg"></img></div>
        <div className="main-content"><h1> Say hello to ReactJS </h1> 
        <p>You will learn a Frontend framework from scratch, to becaome an Ninka Developer.</p><a href="#">Awesome!</a></div>
      </header>
<section>
  {cards}
</section>
      </div>
    );
  }
}

export default App;