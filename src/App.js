//Paso I: Importaciones

import React, { Component } from "react";
import "../src/App.css";
import Card from "../src/components/Card";


const icon1 = "../src/assest/images/icon1.png";
const icon2 = '../src/assest/images/icon2.png';
const icon3 = '../src/assest/images/icon3.png';
const icon4 = '../src/assest/images/icon4.png';


//Paso II:Clases
class App extends Component {

    render () {
    return (
        <div className="App">
        
            <header>
                <nav>
                <ul>
                <li><img src="../src/assest/images/ironhack-logo.svg"/></li>
                
                <li><img src="../src/assest/images/menu-top.svg"/></li>
                </ul>
                </nav>
                <h1>Say Hello To ReactJS</h1>
                <h2>You will learn how to use the most popular frontend library, and become a super ninja developer.</h2>
                <button>Awesome!</button>
            </header>

            <div className = "card-cointainer">
                <Card
                    imgsrc = {icon1}
                    h2 = "Declarative"
                    p="React makes it painless to create interactive UIs"
                />
                <Card 
                    imgsrc = {icon2}
                    h2 = "Components"
                    p="Build encapsulted components that manage their state."
                /> 
                <Card 
                    imgsrc = {icon3}
                    h2 = "Single-Way"
                    p="A set of immutable values are passed to the components"
                /> 
                <Card 
                    imgsrc = {icon4}
                    h2 = "JSX"
                    p="Statically-typed, designed to run on modern browsers."
                /> 
        </div>
        
        
        
        </div>
        
    );
    }

}

export default App; 