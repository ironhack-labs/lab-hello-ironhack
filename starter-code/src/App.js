import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav class="top-nav">
       <img src="./images/ironhack-logo.svg" className="App-logo" alt="logo" />
       <img src="./images/menu-top.svg" className="App-logo" alt="logo" />
       </nav>  
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
          <h1>Say hello to React.js</h1>
          <div>
          <p class="first-para">You will learn frontend framework from scratch, to become a ninja devoloper</p>
          </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ><button>Awesome!</button>
        </a>
        </div>
      </header>
      <div class="bottom-icons">
      <div>
      <img src="./images/icon1.png" className="App-logo" alt="logo" />
      <h3>Declerative</h3>
      <p>React makes it painless to create interactive UIS</p>
      </div>
      <div>
      <img src="./images/icon2.png" className="App-logo" alt="logo" />
      <h3>Components</h3>
      <p>Build encapculated components that manage their state</p>
      </div>
      <div>
      <img src="./images/icon3.png" className="App-logo" alt="logo" />
      <h3>Single-way</h3>
      <p>A set of imutable valuesare passed to component's</p>
      </div>
      <div>
      <img src="./images/icon4.png" className="App-logo" alt="logo" />
      <h3>JSX</h3>
      <p>Statically-typed designed to run modern browsers</p>
      </div>
      </div>  
    </div>
  );
}

export default App;
