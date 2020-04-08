import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
        <img src="/images/menu-top.svg" className="App-menu-icon" alt="menu icon" />
      </header>
      <main className="App-main">
        <div className="App-main-left">
          <div>
            <h1>
                Say hello to ReactJS
            </h1>
            <p>
              You will learn a Frontend framework from scratch, to become a Ninja Developer.
            </p>
          </div>
          <button className="App-button">
            Awesome!
          </button>
        </div>
        <div className="App-main-right">
          <div class="div-1">
            <img alt="React logo" src="/images/react-logo.svg" />
          </div>
          <div class="div-2">
            <img alt="React logo" src="/images/react-logo.svg" />
            <img alt="React logo" src="/images/react-logo.svg" />
            <img alt="React logo" src="/images/react-logo.svg" />
          </div>
          <div class="div-3">
            <img alt="React logo" src="/images/react-logo.svg" />
            <img alt="React logo" src="/images/react-logo.svg" />
          </div>
        </div>
      </main>
      <div className="benefits">
        benef>ts
      </div>
    </div>
  )
}

export default App;
