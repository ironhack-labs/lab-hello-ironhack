import React from "react";

function App() {
    return (
        <div>
            <div className="headmain">
                <div class="upperlogos">
                    <img src="/images/ironhack-logo.svg"></img>
                    <img src="/images/menu-top.svg"></img>
                </div>
                <h1>Say hello to <br></br> ReactJs</h1>
                <h3>You will learn how to use <br></br>the most popular frontend library,<br></br>and become a super Ninja developer</h3>

                <button>Awesome!</button>
            </div>

            <div class="lowerpart">
                <div class="container">
                    <img src="/images/icon1.png"></img>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIS.</p>
                </div>
                <div class="container">
                    <img src="/images/icon2.png"></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div class="container">
                    <img src="/images/icon3.png"></img>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
                <div class="container">
                    <img src="/images/icon4.png"></img>
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
            </div>
        </div>
    );
}

export default App;