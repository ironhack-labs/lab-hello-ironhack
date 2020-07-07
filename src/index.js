import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./app.css"

class Titulo extends Component {
    render() {
        return <h1>Hola {this.props.texto}</h1>
    }
}

const myElement = <div>
    <div>
        <img src="/images/ironhack-logo.svg" />
    </div>
    <div>
        <img src="/images/menu-top.svg" />
    </div>
    <div>
        <p className="p1">Hello</p>
        <p className="p2">Hello</p>
    </div>
    <Titulo texto="Alex" />
</div>

ReactDOM.render(myElement, document.getElementById('root'))