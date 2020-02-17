import React from 'react'
import "./App.css"

export default function App() {
    return (
        <div>
            <div className="big-blue-block">
                <header>
                    <img src="/images/ironhack-logo.svg"></img>
                    <img src="/images/menu-top.svg"></img>
                </header>
                <div className="semi-blue-block">
                <div className="sayHello">
                <h1>Say Hello to React JS</h1>
                <p className="intro">You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
                <button>Awesome !</button>
                </div>
                <div className="ReactLogo">
                    <img src="/images/react-logo.svg"></img>
                </div>
                </div>
            </div>
            <div class="list"> 
             <div className="item-list">
                 <img src="/images/icon1.png"></img>
                 <h4>Declarative</h4>
                 <p className="describe">React makes it painless to create interactive UIs</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon2.png"></img>
                 <h4>Components</h4>
                 <p className="describe">Build encapsulated components that manage their state</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon3.png"></img>
                 <h4>Single Way</h4>
                 <p className="describe">A set of immutable values are passed to the component's</p>
             </div>
             <div className="item-list">
                 <img src="/images/icon4.png"></img>
                 <h4>JSX</h4>
                 <p className="describe">Statically-typed, designed to run on modern browsers</p>
             </div>
            
            </div>
                
            </div>
   
    )
}



