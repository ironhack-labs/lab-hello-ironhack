import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Card from './components/Card';

const myElement = 
<div>
    <div className="dark-background">
        <div className="navbar">
            <div>
                <img src="/images/ironhack-logo.svg" />
            </div>
            <div className="float-right">
                <img src="/images/menu-top.svg" />
            </div>
        </div>
        
        <div>
            <p className="p1">Say Hello to <br/>ReactJS</p>
            <p className="p2">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
            <a className="btn btn-light btn-lg">Awesome!</a>
        </div>
    </div>
    
    <div className="cards container">
    <Card 
        cardTitle="Declarative" 
        cardBody="React makes it painless to create interactive UIs" 
        cardImg="/images/icon1.png"/>
    <Card 
        cardTitle="Components" 
        cardBody="Build encapsulated components that manage their state" 
        cardImg="/images/icon2.png"/>
    <Card 
        cardTitle="Single Way" 
        cardBody="A set of immutable values are passed to the components" 
        cardImg="/images/icon3.png"/>
    <Card 
        cardTitle="JSX" 
        cardBody="Statically-typed, designed to run on modern browsers" 
        cardImg="/images/icon4.png"/>
    </div>
    
</div>

ReactDOM.render(myElement, document.getElementById('root'));