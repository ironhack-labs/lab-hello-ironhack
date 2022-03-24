import React from 'react';
import ReactDOM from 'react-dom';

const header = (
    <header>
        <nav>
            <img src="/images/ironhack-logo.svg" alt="ironhack logo" />
            <img src="/images/menu-top.svg" alt="menu top" />
        </nav>
        <div>
            <h1>Say Hello to ReactJS</h1>
            <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
            <button>Awesome!</button>
        </div>
        
    </header>
);

const section = (
    <section>
        <article>
            <img src="/images/icon1.png" alt="Declarative" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
            <img src="/images/icon2.png" alt="Components" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
            <img src="/images/icon3.png" alt="Single-Way" />
            <h2>Single-Way</h2>
            <p>A set of immutable calues are passed to the compoenent's.</p>
        </article>
        <article>
            <img src="/images/icon4.png" alt="JSX" />
            <h2>JSX</h2>
            <p>Statistically-typed, designed to run on modern browsers.</p>
        </article>
    </section>
);

const app = (
    <div>
        {header}
        {section}
    </div>
);

ReactDOM.render( app , document.getElementById('root') );