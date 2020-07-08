import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import Card from './components/Card';

const myElement = <div>
    <div className="arriba">
        <div className="navBar">
            <div>
                <img src="/images/ironhack-logo.svg" />
            </div>
            <div>
                <img src="/images/menu-top.svg" />
            </div>
        </div>

        <div>
            <p className="p1">Say Hello to ReactJS</p>
            <p className="p2">You will learn frontend framework from scratch, to become a Ninka Developper </p>
            <button className="boton">Awesome!</button>
        </div>
    </div>
    <div className="card-container">
        <Card
            cardTitle="Declarative"
            cardBody="React makes it painless to create interactive UIs"
            cardImage="/images/icon1.png" />
        <Card
            cardTitle="Components"
            cardBody="Build encapsulated components that manage their state"
            cardImage="/images/icon2.png" />
        <Card
            cardTitle="Single-Way"
            cardBody="A set of immutable values are passed to the component´s"
            cardImage="/images/icon3.png" />
        <Card
            cardTitle="JSX"
            cardBody="RStatically-typed designed to run on modern browsers"
            cardImage="/images/icon4.png" />
    </div>

</div>;

ReactDOM.render(myElement, document.getElementById('root'));