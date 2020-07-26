import React, { Component } from 'react'
import Card from './Components/Card'
import Jumbotron from './Components/Jumbotron'


class App extends Component {
    render() {
        return (
    <div className="appContainer"> 
        <Jumbotron/>
        <div className="card-container">
            <Card cardTitle="Declarative" cardBody="React makes it painless to create interactive UIs." cardImg="/images/icon1.png"/>
            <Card cardTitle="Components" cardBody="Build encapsulated components that manage their state." cardImg="/images/icon2.png"/>
            <Card cardTitle="SingleWay" cardBody="A set of inmutable values are passed to the components." cardImg="/images/icon3.png"/>
            <Card cardTitle="JSX" cardBody="Statically-typed, designed to run on modern browsers." cardImg="/images/icon4.png"/>
        </div>
    </div>
        )
    }
}

export default App
