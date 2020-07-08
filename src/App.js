import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Card from './components/Card.js'


class App extends Component {

    render(){
        return (
                   <div className="card-container">
                        <img src="/images/ironhack-logo.svg"/>
                        <img src="/images/menu-top.svg"/>
                        <Card 
                        cardTitle="Declarative"
                        cardBody="React makes it paitnless..." 
                        cardImg="/images/icon1.png"/>
                        <Card 
                        cardTitle="Components"
                        cardBody="Build encapsulated components that manage their state" 
                        cardImg="/images/icon2.png"/>
                        <Card 
                        cardTitle="Single-Way"
                        cardBody="A set of immutable values are passed to the component's" 
                        cardImg="/images/icon3.png"/>   
                        <Card 
                        cardTitle="JSX"
                        cardBody="STATICALLY-TYPED DESIGNED TO RUN ON MODERN BROWSERS" 
                        cardImg="/images/icon4.png"/>  
            
                     </div>
            
        )
    }
}    
export default App;
