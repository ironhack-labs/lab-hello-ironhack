import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import'./app.css'
import Card from './components/Card'

//const Titulo = props => <h1>{props.texto}</h1>

const myElementy = <div className="body">
    <div className="hero">
        <div className="header"> 
            <img  className="headerImg" src="/images/ironhack-logo.svg"/>
            <img className="headerImg" src="/images/menu-top.svg"/>
        </div>

        <div className="msg">
            <p className="p1">Say Hello to<br/> ReacJS</p>
            <p className="p2"> You will learn a Frontend framework from scratch, to becaome an Ninka Developer</p>
            <a class="btn" href="#">Awesome</a>
        </div>
    </div>
    <div className="card-container"> 
    <Card  cardImg="./images/icon1.png" cardTitle="Declarative"  cardBody="React makes it painless to create interactive UIs."/>
    <Card  cardImg="./images/icon2.png" cardTitle="Components"  cardBody="Build encapsulated components that manage their state."/>
    <Card  cardImg="./images/icon3.png" cardTitle="Single-Way"  cardBody="A set of inmutable values are passed to component's."/>
    <Card  cardImg="./images/icon4.png" cardTitle="JSX"  cardBody="Stactically-typed, designed to run on modern browser."/>
    </div>
</div>

ReactDOM.render(myElementy, document.getElementById('root'))