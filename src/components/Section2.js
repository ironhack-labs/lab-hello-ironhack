import React, { Component } from 'react'
import Card from "./Card"

class Section2 extends Component {
    render() {
        return (
            <div id="section2">
                <div className="card-container">
                    <Card
                        cardImg="/images/icon1.png"
                        cardTitle="Declarative"
                        cardBody="React makes it painless to create interactive UIs."
                    />
                    <Card
                        cardImg="/images/icon2.png"
                        cardTitle="Components"
                        cardBody="Build encapsulated components that manage their state."
                    />
                    <Card
                        cardImg="/images/icon3.png"
                        cardTitle="Single-Way"
                        cardBody="A set of immutable vlaues are passed to the component's."
                    />
                    <Card
                        cardImg="/images/icon4.png"
                        cardTitle="JSX"
                        cardBody="Statically-typed, designed to run on modern browsers."
                    />
                </div>
            </div>
        )
    }
}

export default Section2;