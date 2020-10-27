import React from 'react';
import "./app.css";

const App = () => {
  return (
    <main>
      <section className="main-section-container">
        <div className="main-section-images">
          <img src="/images/ironhack-logo.svg" alt="logo" />
          <img src="/images/menu-top.svg" alt="menu" />
        </div>

        <div className="main-section-text">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </section>
      

      <section className="items-section">
        <div>
          <img className="images" src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p className="text-information">React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img className="images" src="/images/icon2.png" />
          <h2>Components</h2>
          <p className="text-information">Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img className="images" src="/images/icon3.png" />
          <h2>Single-Way</h2>
          <p className="text-information">A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img className="images" src="/images/icon4.png" />
          <h2>JSX</h2>
          <p className="text-information">Statically-typed designed to run on modern browsers</p>
        </div>
      </section>
    </main>
  )
};

export default App;
