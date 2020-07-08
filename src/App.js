import React, { Component } from "react"
import "./App.css"
import Card from "./components/Card"
import Boton from "./components/Boton"

class App extends Component {
    render() {
        return (<div>
        <div className="upper-part">
            <div className="nav-bar">
            <div><img src="/images/ironhack-logo.svg"/></div>
            <div><img src="/images/menu-top.svg"/></div>
            </div>
            <div>
                <p className="p1">Say Hello to ReactJS</p>
                <p className="p2">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <Boton texto ="Awesome!"/>
            </div>
            </div>
            <div className="card-container">
                <Card 
                    cardTitle="Declarative" 
                    cardBody="React makes it painless to create interactive UIs" 
                    cardImage="/images/icon1.png"/>
                <Card 
                    cardTitle="Components" 
                    cardBody="Build encapsulated components that manage their state" 
                    cardImage="/images/icon2.png"/>
                <Card 
                    cardTitle="Single-Way" 
                    cardBody="A set of immutable values are passed to the components" 
                    cardImage="/images/icon3.png"/>
                <Card 
                    cardTitle="JSX" 
                    cardBody="Statically-typed, designed to run on modern browsers" 
                    cardImage="/images/icon4.png"/>
            </div>
        </div>);
    }
}

export default App