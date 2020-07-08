import React from 'react'
import Card from './Card';

export default function SectionBottom() {
    const cards = [
      {
        img: "/images/icon1.png",
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
      },
      {
        img: "/images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state.",
      },
      {
        img: "/images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the component's.",
      },
      {
        img: "/images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers.",
      },
    ];

    return (
        <section id="bottom">
          {cards.map((e) => (
            <Card 
              img={e.img} 
              cardTitle={e.title} 
              cardText={e.text} 
              cname="card"
              textCname="card-text"  
              />
          ))}
        </section>
    )
}
