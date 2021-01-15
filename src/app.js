import React from 'react';
import './app.css';

const App = () => {
    return <div>
        <header>
            <nav>
                <img src="./images/ironhack-logo.svg"/>
                <img src="./images/menu-top.svg" />
            </nav>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </header>
        <div className="characteristics">
            <div>
                <img src="./images/icon1.png" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="./images/icon2.png" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="./images/icon3.png" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="./images/icon4.png" />
                <h2>JSX</h2>
                <p>Statically-typed. designed to run on modern browsers.</p>
            </div>
        </div>
    </div>;
};

export default App;