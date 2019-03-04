import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavContainer">
          <div className="NavIcons">
            <img src="https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png" />
          </div>
          <div className="NavIcons">
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" />
          </div>
        </div>
        <div className="MainContainer">
          <div className="MainCard">
            <h1>Say Hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="Footer">
          <div className="IconCards">
            <div>
              <img src="./images/icon1.png" />
            </div>
            <h3>Declarative</h3>
            <p>React makes it painless to creat interactive UIs.</p>
          </div>
          <div className="IconCards">
            <div>
              <img src="./images/icon2.png" />
            </div>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="IconCards">
            <div>
              <img src="./images/icon3.png" />
            </div>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="IconCards">
            <div>
              <img src="./images/icon4.png" />
            </div>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
