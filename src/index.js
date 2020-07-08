import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./app.css"
import Card from './components/Card'

const myElement = <div>
    <div className="banner"> 
        <div className="navbar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
        </div>
        <div className="banner-content">
            <p className="p1">Say hello to ReactJS</p>
            <p className="p2">You will learn a Frontend framework from scratch, to become an Ninka Developer!</p>
            <button>Awesome!</button>
        </div>
    </div>
    <div className="card-container">
    
        <Card cardTitle="Declarative" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon1.png"
        />
     
        <Card cardTitle="Components" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon2.png"
        />

        <Card cardTitle="Single way" 
        cardBody="React makes it painless to create inter UIs"
        cardImg="/images/icon3.png"
        /> 

 
        <Card cardTitle="JSX" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon4.png"
        />    
    </div>
</div>

ReactDOM.render(myElement, document.getElementById('root'))