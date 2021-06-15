import React, { Component } from "react";
import "./App.css";
import ContentCard from "./components/Card";
class App extends Component {

  render() {
    const cards = [
      {
        pic: "/images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs."
      },
      {
        pic: "/images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their state."
      },
      {
        pic: "/images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's."
      },
      {
        pic: "/images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
      }
    ];
    const header = (
      <section class = "header">
        <img src='../images/ironhack-logo.svg'/>
        <img src='../images/menu-top.svg'/>
      </section>
    );

    const body = (
      <section>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button class = "awsome">Awesome!</button>
      </section>
    )
    return (
      <section>
        <div class = "top">
          {header}
          {body}
        </div>
        <div class = "bot">
          {
            cards.map((card,index_card)=>(
              <ContentCard
              key={index_card}
              pic={card.pic}
              title={card.title}
              description={card.description}
              />))
          }
        </div>
      </section>
      /*<div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvartar(user)}
      </div>
      */
    );
  }
}

export default App;
