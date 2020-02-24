import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">

        <nav className="d-flex justify-content-between">
          <figure>
            <img src="./images/ironhack-logo.svg" />
          </figure>
          <figure>
            <img src="./images/menu-top.svg" />
          </figure>
        </nav>
        <div className="row head">
          <div className="col-lg-6">
            <h1>Say hello to ReactJS</h1>
            <p>You will leran a Frontend framework from scratch, to become an Ninja Developer.</p>
            <button className="btn btn-light">Awesome!</button>
          </div>
        </div>
      </div>

      <div className="row section2">

        <div className="col-md-3">
          <figure>
            <img src="./images/icon1.png" />
          </figure>
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="col-md-3">
          <figure>
            <img src="./images/icon2.png" />
          </figure>
          <h4>Components</h4>
          <p>Build encapsulated Components that manage their state.</p>
        </div>
        <div className="col-md-3">
          <figure>
            <img src="./images/icon3.png" />
          </figure>
          <h4>Single-Way</h4>
          <p>A set to inmutable values are passed to the component's.</p>
        </div>
        <div className="col-md-3">
          <figure>
            <img src="./images/icon4.png" />
          </figure>
          <h4>JSX</h4>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>



    </div>
  );
}

export default App;
