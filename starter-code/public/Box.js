import React from "react";
import Card from "./Card";
import "./Box.css";

const Box = () => {
  const elements = [
    {src: "./images/icon1.png", caption: "Declarative", description: "React makes it painless to create interactive UIs."},
    {src: "./images/icon2.png", caption: "Components", description: "Build encapsulated components that manage their state."},
    {src: "./images/icon3.png", caption: "Single-way", description: "A set of immutable values are passed to the component's."},
    {src: "./images/icon4.png", caption: "JSX", description: "Statically-type designed to run on modern browsers."},
  ]

  const renderCards = () => {
    let cards = elements.map (e => {
      return (
        <Card img={e.src} caption={e.caption} description={e.description} />
      )
    })
    return cards
  }
  return (
  <section className="box">
    {renderCards()}
  </section>
  )
}

export default Box;