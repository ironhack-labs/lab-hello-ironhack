import React from "react";

const App = () => {
  return (
    <main>
      <section className="main-section">
        <div className="navbar">
          <img src="/images/ironhack-logo.svg" alt="ironhacklogo" />
          <img src="/images/menu-top.svg" alt="menutop" />
        </div>
        <div className="main-content">
          <h1>Say Hello to ReactJs</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja Developer
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="info-section">
        <div>
          <img src="/images/icon1.png" alt="icon1" />
          <h3>Declarative</h3>
          <p>React Makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src="/images/icon2.png" alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src="/images/icon3.png" alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src="/images/icon4.png" alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </section>
    </main>
  );
};

export default App;
