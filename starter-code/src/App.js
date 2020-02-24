import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return( 
      <div className="App">
      <main>

      <section class="upper-section">

        <nav id="nav-container">
          <img src="/images/ironhack-logo.svg" />
          <img src="/images/menu-top.svg" />
        </nav>

        <h1> Say hello to ReactJS </h1>
        <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
        <div>
          <button>Awesome!</button>
        </div>
        
      </section>


      <section class="lower-section">
        <div class="cards-container">
          <div className="card">
              <img src="/images/icon1.png" />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs</p>
          </div>

          <div className="card">
            <img src="/images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>

          <div className="card">
            <img src="/images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>

          <div className="card">
            <img src="/images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>
        </div>
       
      </section>




      </main>
      </div>
    );    
  }
}

export default App;