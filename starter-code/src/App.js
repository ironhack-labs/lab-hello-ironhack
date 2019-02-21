import React, { Component } from "react";
import "./App.css";


import Nav from './Nav';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <section class="up">
            <h1> Say hello ReactJS </h1>
            <h2> You will learn a front end framework from scratch, to become a Ninja Developer</h2>
            <button type="submit" name="button" class="btn btn-red">Awsome!</button>
          </section>
          < Cards />
        </div>

    );
  }
}

export default App;
