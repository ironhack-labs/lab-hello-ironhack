import React from "react";

function App() {
  return (
    <div className="app">
      <nav>
        <img src="./images/ironhack-logo.svg" alt="IH Logo" />
        <img src="./images/menu-top.svg" alt="Menu" />
      </nav>
      <header>
        <h1>
          Say hello to<br></br>
          ReactJS
        </h1>
        <h3>
          You will learcn how to use<br></br>
          the most popular frontend library,<br></br>
          and become a super Ninja developer.
        </h3>
        <a href="#">Awesome!</a>
      </header>
      <section>
        <div>
          <img src="./images/icon1.png" alt="Icon1" />
          <h2>Declarative</h2>
          <h3>React makes it painless to create interactive UIs.</h3>
        </div>
        <div>
          <img src="./images/icon2.png" alt="Icon2" />
          <h2>Components</h2>
          <h3>Build encapsulated components that manage their state.</h3>
        </div>
        <div>
          <img src="./images/icon3.png" alt="Icon3" />
          <h2>Single-Way</h2>
          <h3>A set of immutable values are passed to the components.</h3>
        </div>
        <div>
          <img src="./images/icon4.png" alt="Icon4" />
          <h2>JSX</h2>
          <h3>Statically-typed, designed to run on modern browsers.</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
