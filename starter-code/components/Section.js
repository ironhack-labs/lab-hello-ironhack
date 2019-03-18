import React from 'react'

import Card from './Card'

function Section () {

  const card1 = {
    img: "./images/icon1.png",
    title: "Declarative",
    text: "React makes it painless to create interactive UIs."
  },
   card2 = {
    img: "./images/icon2.png",
    title: "Components",
    text: "Build encapsulated components that manage their state."
  },
   card3 = {

    img: "./images/icon3.png",
    title: "Single-Way",
    text: "A set of inmutable value are passed to he components."
  },
  card4 = {
    img: "./images/icon4.png",
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers"
  }

  return(

    <section className="card-container">
      <Card {...card1}/>
      <Card {...card2}/>
      <Card {...card3}/>
      <Card {...card4}/>
    </section>

  )
}

export default Section