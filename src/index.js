import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Card from './components/Card';

const mydiv = (
    <div className="main">
        <section>
            <nav>
                <div>
                    <img src="/images/ironhack-logo.svg" />
                </div>
                <div>
                    <img src="/images/menu-top.svg" />
                </div>
            </nav>
            <div>
                <h1>Say hello to <br></br>ReactJs</h1>
                <p>You will lern a Frontend <br></br>
            framework from scratch, to <br></br>
            become an Ninja Developer.</p>
            </div>
            <button>Awesome!</button>
        </section>

        <div className="boxes">
            <Card
                cardTitle="Declarative"
                cardBody="React makes it painless to create painlessinteractive UIS."
                cardImg="/images/icon1.png" />
            <Card
                cardTitle="Components"
                cardBody="Build encapsulated components that manage their state."
                cardImg="/images/icon2.png" />
            <Card
                cardTitle="Single-Way"
                cardBody="A set of immutable values are passed to the component's."
                cardImg="/images/icon1.png" />
            <Card
                cardTitle="JSX"
                cardBody="Statically-typed, designed to run on modern browsers."
                cardImg="/images/icon1.png" />
        </div>
    </div>

);


ReactDOM.render(mydiv, document.getElementById('root'))