import React from 'react'
import Declarative from '../images/icon1.png'
import Components from '../images/icon2.png'
import Single from '../images/icon3.png'
import JSX from '../images/icon4.png'
import './Articles.css'

function Articles() {
    return (
        <div className="article">
            <article>
                <img src={Declarative} alt="logo declarative"></img>
                <h4>Declarative</h4>
                <p>React makes it painless to create interative UIs.</p>
            </article>
            <article>
                <img src={Components} alt="logo components"></img>
                <h4>Components</h4>
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article>
                <img src={Single} alt="logo single"></img>
                <h4>Single-Way</h4>
                <p>A set of inmutable values are passed to the component's</p>
            </article>
            <article>
                <img src={JSX} alt="logo JSX"></img>
                <h4>JSX</h4>
                <p>Statically-typed designed to run on modern browsers</p>
            </article>
        </div>
    )
}

export default Articles