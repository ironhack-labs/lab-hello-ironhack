import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Nav">
            <img className="logo" src="./images/ironhack-logo.svg" />
            <img className="logo2" src="/images/menu-top.svg" />
          </div>
          <div className="container">
            <h1 className="h1"> Say hello to RectJS </h1>
            <p className="p">
              You will learn a Frontend framework from scratch, to becaome an
              Ninka Developer.
            </p>
            <button className="btn">Awesome!</button>
          </div>
        </div>
        <div className="content">
          <div>
            <img className="logo" src="/images/icon1.png" />
            <h4>Declaritive</h4>
            <p>React makes ir painless to create interactive Uls.</p>
          </div>
          <div>
            <img className="logo" src="/images/icon2.png" />
            <h4>Componets</h4>
            <p>Build encapsulated componets that manage</p>
          </div>
          <div>
            <img className="logo" src="/images/icon3.png" />
            <h4></h4>
            <p></p>
          </div>
          <div>
            <img className="logo" src="/images/icon4.png" />
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
