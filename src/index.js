import React from 'react'
import ReactDOM from 'react-dom'
import "./app.css"

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
</div>

ReactDOM.render(myElement, document.getElementById('root'))