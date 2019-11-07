/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const mainPage = (
      <Fragment>
        <section className="main-content">
          <nav className="images">
            <img src="/images/ironhack-logo.svg" width="100" height="100" alt="user logo" />
            <img src="/images/menu-top.svg" width="100" height="100" alt="dropdown menu" />
          </nav>
          <div>
            <h1>Say hello to ReactJS</h1>
            <p className="main-paragraph">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
            <div className="button-division">
              <a href="#awesome!" className="main-button">Awesome!</a>
            </div>
          </div>
        </section>
        <section className="cards">
          <article className="minor-cards">
            <img src="/images/icon1.png" alt="engine tool" />
            <h2>Declarative</h2>
            <p className="minor-paragraphs">React makes it painless to create interactive UIs.</p>
          </article>
          <article className="minor-cards">
            <img src="/images/icon2.png" alt="components based" />
            <h2>Components</h2>
            <p className="minor-paragraphs">Build encapsulated components that manage their state.</p>
          </article>
          <article className="minor-cards">
            <img src="/images/icon3.png" alt="immutable values" />
            <h2>Single-Way</h2>
            <p className="minor-paragraphs">A set of immutable values are passed to the components.</p>
          </article>
          <article className="minor-cards">
            <img src="/images/icon4.png" alt="JSX designed" />
            <h2>JSX</h2>
            <p className="minor-paragraphs">Statically-typed, designed to run on modern browsers.</p>
          </article>
        </section>
      </Fragment>
    );
    
    return (
      <div className="App">
        {mainPage}
      </div>
    );
  }
}

export default App;
