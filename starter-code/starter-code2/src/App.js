import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="one">
          <header className="App-header">
            <img src="images/ironhack-logo.svg" className="App-logo" alt="logo" />
          </header>
        
          <div className="titleStyle">
          <h1>Say hello to React</h1>
          <p class="mainText">You will learn a frontend framework from scratch, to become a Ninka Developer.</p>
          </div>

          <button className="awesome">Awesome!</button>
        </section>

        <div className="two">

          <section class="logoSections">
            <img src="images/icon1.png" className="footer" alt="logo" />
            <div class="footerHeader">
              <h2 class="logoHeaders">Declarative</h2>
              <p class="logoDetails">React makes it painless to create interactive UIs</p>
            </div>
          </section>
        
          <section class="logoSections">
            <img src="images/icon2.png" className="footer" alt="logo" />
            <div class="footerHeader">
              <h2 class="logoHeaders">Components</h2>
              <p class="logoDetails">React makes it painless to create interactive UIs</p>
            </div>
          </section>

          <section class="logoSections">
            <img src="images/icon3.png" className="footer" alt="logo" />
            <div class="footerHeader">
              <h2 class="logoHeaders">Single-Way</h2>
              <p class="logoDetails">React makes it painless to create interactive UIs</p>
            </div>
          </section>

          <section class="logoSections">
            <img src="images/icon4.png" className="footer" alt="logo" />
            <div class="footerHeader">
              <h2 class="logoHeaders">JSX</h2>
              <p class="logoDetails">React makes it painless to create interactive UIs</p>
            </div>
          </section>

        </div>

      </div>
    );
  }
}

export default App;
