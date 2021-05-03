import React from 'react';
import Cards from './Cards';

const App = () => {
    return (
      <main>
        <header>
          <div className="hero">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
          </div>

          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </header>
        <section>
          <Cards
            cardImage={"/images/icon1.png"}
            cardTitle={"Declarative"}
            cardText={"React makes it painless to create interactive UIs."}
          />
          <Cards
            cardImage={"/images/icon2.png"}
            cardTitle={"Components"}
            cardText={"Build encapsulated components that manage their state."}
          />
          <Cards
            cardImage={"/images/icon3.png"}
            cardTitle={"Single-Way"}
            cardText={"A set of immutable values are passed to the component's."}
          />
          <Cards
            cardImage={"/images/icon4.png"}
            cardTitle={"JSX"}
            cardText={"Statistically-typed, designed to run on modern browsers."}
          />
        </section>
      </main>
    );
}

export default App;