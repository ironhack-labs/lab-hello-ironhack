import React, { Component } from "react";
import Card from './components/Card.js'


class App extends Component {

    render(){
        return (
            
            <div className="body">
                <div>
                <img className="menu" src="/images/menu-top.svg"/>
                </div>
                <div>
                <img className="logo" src="/images/ironhack-logo.svg"/>
                </div>
                
                <div>
               
                <h1 className="p1">Say hello to ReactJS</h1>
                <h2 className="p2">You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
                </div>
                
                <div className="card-container">
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
            </div>
                        
            
        )
    }
}    
export default App;
