// src/app.js

import React from 'react';
import "./App.css"; // <== import React

const App = () => {
    return (
      <div className="App">
        <section className="banners">
          <div className="inner-banner">
            <nav className="logo">
              <img src="/images/ironhack-logo.svg" />
            </nav>
            <h1>
              Say Hello <br />
              to React JS
            </h1>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to <br />
              become an Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
  
          <div className="backgrounds">
            <div className="inner-background">
              <div className="bg-1"></div>
              <div className="bg-2"></div>
              <div className="bg-3"></div>
            </div>
  
            <div className="bg-4"></div>
          </div>
        </section>
  
        <section className="information">
          <div className="box">
            <img src="/images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
  
          <div className="box">
            <img src="/images/icon2.png" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their own state</p>
          </div>
  
          <div className="box">
            <img src="/images/icon3.png" />
            <h4>Single-Way</h4>
            <p>
              Declarative views make your code more predictable and easier to
              debug.
            </p>
          </div>
  
          <div className="box">
            <img src="/images/icon4.png" />
            <h4>JSX</h4>
            <p>
              React can also render on the server using Node and power mobile apps
              using React Native.
            </p>
          </div>
        </section>
      </div>
    );
  };

export default App;
