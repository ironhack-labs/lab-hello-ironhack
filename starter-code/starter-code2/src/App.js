import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js';

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

        <Footer />

      </div>

    );
  }
}

export default App;
