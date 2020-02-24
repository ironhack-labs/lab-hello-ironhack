import React, { Component } from "react";
import "./App.css";

import FrontPage from './FrontPage';

// React class Component
class App extends Component {
  render() {
    return (<div className="App">
      <FrontPage title="Welcome to Ironhack" >
    
    <div className="upper-section">

        <section className="nav-bar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
        </section>
    
    <img className="react-logo" src="/images/react-logo.svg" />
            
        <section className="main-text">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninja developer</p>
        </section>

            <button>Awesome!</button>
    </div>

    <div className="bottom-section">

        <div>
            <img src="/images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
        </div>

        <div>
            <img src="/images/icon2.png" />
            <h3>Components</h3>
            <p>React makes it painless to create interactive UIs</p>
        </div>

        <div>
            <img src="/images/icon3.png" />
            <h3>Single-Way</h3>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
            <img src="/images/icon4.png" />
            <h3>JSX</h3>
            <p>React makes it painless to create interactive UIs</p>
        </div>

    </div>    

      </FrontPage>
    </div>
    )
  }
}

export default App;
