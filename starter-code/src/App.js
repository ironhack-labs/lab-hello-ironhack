import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light bg-dark">
          <a class="navbar-brand" href="#"><img src="/images/ironhack-logo.svg" alt="Ironhack" class="ironhack-logo"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/images/menu-top.svg" alt="Ironhack" class="icon-menu"/>
          </button>

          <div class="collapse navbar-collapse elements-menu" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="jumbotron">
          <div class="jumbotron-inner">
            <h1 class="display-4">Say hello to<br/>ReactJS</h1>
            <p class="lead">You will learn a Frontend<br/>
            framework from scratch, to<br/>
            become a Ninja Developer</p>
            <a class="btn btn-light btn-lg" href="#" role="button">Awesome!</a>
          </div>
        </div>
        <div class="card-deck">
          <div class="card">
              <img class="card-img-top" src="/images/icon1.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Declarative</h5>
                <p class="card-text">React makes it painless to create interactive UIs</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/images/icon2.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Components</h5>
                <p class="card-text">Build encapsulated components that manage their state.</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/images/icon3.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Single-Way</h5>
                <p class="card-text">A set of immutable values are passed to the component's.</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/images/icon4.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">JSX</h5>
                <p class="card-text">Statically-typed, designed to run on modern browsers.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
