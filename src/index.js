import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const nav = (
    <div className="background">
        <nav className="nav-wrapper">
            <img src="/images/ironhack-logo.svg" alt="logo-ironhack"/>
            <img src="/images/menu-top.svg" alt=""/>
        </nav>
      
    

    </div>
)

const header = (
    <div className="header">
        {nav}
   

    <section>
    <h1 className="headline">Say Hello to ReactJS</h1>
    <p className="header-text">You will learn a Frontend framework from scratch,
    to become a Ninja Developer</p>
    </section>
    <button>Awesome</button>

    <section className="article-section">
        <article>
            <img src="/images/icon1.png" alt=""/>
            <h4>Declarative</h4>
            <p>React makes it painless to create intractive UIs</p>
        </article>
        <article>
        <img src="/images/icon2.png" alt=""/>
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
        <img src="/images/icon3.png" alt=""/>
        <h4>Singe-Way</h4>
        <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article>
        <img src="/images/icon4.png" alt=""/>
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
    </section>
    </div>

    
)



ReactDOM.render(
    header,
    document.getElementById('root')
);