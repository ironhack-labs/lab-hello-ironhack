import React from 'react';
import "./App.css"

export default function App() {
    return (
        <div>
            <div className="big-layout">
                <header>
                    <img src="/images/ironhack-logo.svg"></img>
                    <img src="/images/menu-top.svg"></img>
                </header>
                    
                <div className="titleandimage">
                <h1>Say Hello to React JS</h1>
                <img src="/images/react-logo.svg" />
                </div>
                <p className="text">You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
                <button> Awesome! </button>
            </div>

            <div class="list"> 
             <div className="item-list">
                 <img src="/images/icon1.png"></img>
                 <h2>Declarative</h2>
                 <p className="description">React makes it painless to create interactive UIs</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon2.png"></img>
                 <h2>Components</h2>
                 <p className="description">Build encapsulated components that manage their state</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon3.png"></img>
                 <h2>Single Way</h2>
                 <p className="description">A set of immutable values are passed to the component's</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon4.png"></img>
                 <h2>JSX</h2>
                 <p className="description">Statically-typed, designed to run on modern browsers</p>
             </div>

            </div>

            </div>

    )}