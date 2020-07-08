import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./app.css"
import Card from './components/Card'

class Titulo extends Component {
    render() {
        return <h1>Hola {this.props.texto}</h1>
    }
}

const myElement = <div>
    <div className="banner"> 
        <div className="navbar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
        </div>
        <div className="banner-content">
            <p className="p1">Hello</p>
            <p className="p2">You will learn</p>
            <button>Submit</button>
        </div>
    </div>
    <div className="card-container">
        <div className="card">
            <Card cardTitle="Declarative" 
            cardBody="React makes it painless to create inter UIs" 
            cardImg="/images/icon1.png"/>
        </div>

        <div className="card">
        <Card cardTitle="Components" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon2.png"/>
</div>

<div className="card">
        <Card cardTitle="Single way" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon3.png"/>
  </div>
  <div className="card">
        <Card cardTitle="JSX" 
        cardBody="React makes it painless to create inter UIs" 
        cardImg="/images/icon4.png"/>
 </div>
    </div>
    
</div>

ReactDOM.render(myElement, document.getElementById('root'))