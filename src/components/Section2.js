import React, { Component } from 'react'
import Card from "./Card"

class Section2 extends Component {
    render() {

        const cards = [
            {
                image: "/images/icon1.png",
                title: "Declarative",
                body: "React makes it painless to create interactive UIs."
            },
            {
                image: "/images/icon2.png",
                title: "Components",
                body: "Build encapsulated components that manage their state."
            },
            {
                image: "/images/icon3.png",
                title: "Single-Way",
                body: "A set of immutable vlaues are passed to the component's."
            },
            {
                image: "/images/icon4.png",
                title: "JSX",
                body: "Statically-typed, designed to run on modern browsers."
            }
        ]

        return (
            <div id="section2">
                <div className="card-container">
                    {cards.map(elem => <Card cardImg={elem.image} cardTitle={elem.title} cardBody={elem.body} />)}
                </div>
            </div>
        )
    }
}

export default Section2;