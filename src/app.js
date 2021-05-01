import React from 'react';

const App = () => {
  return (
    <main>
      <section className="main-section-container">
        <div className="nav-bar">
          <img src="./images/ironhack-logo.svg" alt="Ironhack logo" />
          <img src="./images/menu-top.svg" alt="Menu top icon" />
        </div>
        <div className="intro">
          <h1 className="main-title">Say Hello to ReactsJS</h1>
          <p className="intro-description">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button className="awesome-button">Awesome!</button>
        </div>
      </section>
      <section className="card-container">
        <div className="card">
          <img className="card-image" src="./images/icon1.png" alt="Icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img className="card-image" src="./images/icon2.png" alt="Icon 2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img className="card-image" src="./images/icon3.png" alt="Icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="card">
          <img className="card-image" src="./images/icon4.png" alt="Icon 4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern web browsers.</p>
        </div>
      </section>
    </main>
  );
};

export default App;
