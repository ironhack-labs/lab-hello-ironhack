import React from "react";

import Card from "./components/Card/Card.js";

const App = () => {
  return (
    <main>
      <section className="main">
        <div className="nav">
          <img src="/images/ironhack-logo.svg" alt="logo"></img>
          <img src="/images/menu-top.svg" alt="logo"></img>
        </div>

        <div className="main-content">
          <h1>Say Hello to React JS</h1>

          <p>
            You will lear how to use the most popular frontend library, and
            become a Super Ninja developer.
          </p>

          <button>Awesome:</button>
        </div>
      </section>

      <section className="footer">
        <Card 
            imagePath="/images/icon1.png"
            imageName="icon"
            title="Declarative"
            description="React makes it painless to create interactive UIs"
        />
        <Card 
            imagePath="/images/icon2.png"
            imageName="icon2"
            title="Compenents"
            description="Build encapsulated components that manage their state"
        />
        <Card 
            imagePath="/images/icon3.png"
            imageName="icon3"
            title="Single-Way"
            description="A set of immutable caluews are passed to the components's."
        />
        <Card 
            imagePath="/images/icon4.png"
            imageName="icon3"
            title="JSX"
            description="Statically-typed. designed to run on moder browsers."
        />

      </section>
    </main>
  );
};

export default App;
