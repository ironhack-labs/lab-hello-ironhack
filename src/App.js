import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <nav>
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" />
      </nav>
      <div class="container">
        <div className="text">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn blablablablablablabla</p>
        </div>
        <button>Awesome!</button>
      </div>
    </div>
  );
};

export default App;
