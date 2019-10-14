import React, { Component } from "react";

class Card extends Component {
  render() {
    const info =[
    {
      imgSrc: "/images/icon1.png",
      title: "Declarative",
      description:"React make it painless to create interactive UIs."
    },
    {
      imgSrc: "/images/icon2.png",
      title: "Components",
      description: "Build encapsulated components that manage their state."
    },
    {
      imgSrc: "/images/icon3.png",
      title: "Single-Way",
      description: "A set of immutable values are passed to the component`s"
    },
    {
      imgSrc: "/images/icon4.png",
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers."
    },
  ];

  let cards = info.map(item => {
    return (
    <div className="card">
    <img src={item.imgSrc} />
    <h4>{item.title}</h4>
    <h5> {item.description}</h5>
  </div>
  )})
    return (
      <div className = "cards">
      {cards}
      </div>
    );
  }
}

export default Card;