import React from 'react';

import './App.css'

const App = () => {

    return (
        <main>
            <section className= "top">
             <nav>
                <img src= "/images/ironhack-logo.svg"/>
                <img src="/images/menu-top.svg"/>
            </nav>  
            <div>
                <h1>Say hello to <br/>ReactJS </h1>
                <p>You will learn how to use the most popular frontend library, <br/>and become a super Ninja developer.</p>
            </div>

            <button>Awesome</button>
            </section>

            <section className = "bottom">
            <div>
                <img src="/images/icon1.png"/>
                <h2>Declarative</h2>
                <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
            </div>

            <div>
                <img src="/images/icon2.png"/>
                <h2>Components</h2>
                <p>Build encapsulated <br/>components that <br/>manage their state.</p>
            </div>

            <div>
            <img src="/images/icon3.png"/>
                <h2>Single-Way</h2>
                <p>A set of immutable <br/>values are passed to <br/>the component's.</p>
            </div>

            <div>
            <img src="/images/icon4.png"/>
                <h2>JSX</h2>
                <p>Statically-typed <br/>designed to run on <br/>modern browsers</p>
            </div>
            </section>

        </main>
        )};

export default App;