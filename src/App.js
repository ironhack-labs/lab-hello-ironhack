import React, { Component } from "react"
import Card from './Card.js';
import Header from './Header.js';


const App = () => {
    return (
        <div> 
            <Header />
            <div className="on-line"> 
            <Card img= "/images/icon1.PNG" title= "Declarative" description= "React makes it painless to create interactive UIs"/>
            <Card img= "/images/icon2.PNG" title= "Components" description= "Build encapsulted components that manage their state"/>
            <Card img= "/images/icon3.PNG" title= "Single-Way" description= "A set of immutable values are passed to the component's"/>
            <Card img= "/images/icon4.PNG" title= "JSX" description= "Statically-typed, designed to run on modern browsers."/>
        </div>
            </div>

    )
}

export default App