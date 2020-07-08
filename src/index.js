import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"
import "./app.css" 


const elemento = <div>
<div className="div-oscuro">
        <div className="iconDiv">
            <img className="ironLogo" src="/images/ironhack-logo.svg"/>
        </div>
        <div className="menuLogo">
            <img  src="/images/menu-top.svg"/> 
        </div>
        <div className="textDiv">
            <h1 className="title">Say hello to <br></br> ReactJS  </h1>
            <p className="paragraph">You will learn a Frontend <br></br> framework from scratch, to<br></br> become a ninja Developer </p>
        
             <button className="awesomeButton">Awesome!</button>
             
        </div>
        </div>
    <div className="cardContainer">
        <Card 
        cardTitle="Declarative"
        cardBody="React makes it painless to create interactive UIs." 
        cardImg="/images/icon1.png" />

        <Card 
        cardTitle="Components"
        cardBody="Build encapsulated components that manage their state." 
        cardImg="/images/icon2.png" />

        <Card 
        cardTitle="Single-way"
        cardBody="A set of immutable values are passed to the components." 
        cardImg="/images/icon3.png" />  

        <Card 
        cardTitle="JSX"
        cardBody="Statically-typed, designed to run on modern browsers." 
        cardImg="/images/icon4.png" />  
    </div>
</div>  

ReactDOM.render(elemento, document.getElementById("root"))