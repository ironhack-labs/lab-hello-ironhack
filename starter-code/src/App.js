import React, { Component } from "react";
import "./App.css";

// Regular component, is the most reliable, allows you to do stuff and show stuff. 
// Other types of components are more simple but don't let you do stuff
class App extends Component {  
  render() {  // Component must have this render function and this render function 
    return ( // must have a return statement that returns html. The return must ONE <div> wrapped in one <tag>
      // this is JS, so class has to be className
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-between px-4 py-2">
            <img className="logo" src='./images/ironhack-logo.svg' alt="ironHack logo"/>
            <img className="menu pt-2 pr-2" src="./images/menu-top.svg" alt="menu"/>
          </div>
          <div className="row">
            <div className="col-6 main-div">
              <h1 className="heading"><p>Say hello to </p> <p>ReactJS</p></h1>
              <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <button className="btn myBtn">Awesome!</button>
            </div>
            <div className="react-logo col-6">
            </div>
            </div>
            <div  className="row services">
              <div class="col-3">
                <img className="card-img-top" src="./images/icon1.png" alt="declarative icon"/>
                <h2 class="card-title">Declarative</h2>
                <p class="card-text">React makes it painless to create interactive UIs.</p>
              </div>
              <div class="col-3">
                <img className="card-img-top" src="./images/icon2.png" alt="declarative icon"/>
                <h2 class="card-title">Components</h2>
                <p class="card-text">Build encapsulated coomponents that manage their state.</p>
              </div>
              <div class="col-3">
                <img className="card-img-top" src="./images/icon3.png" alt="declarative icon"/>
                <h2 class="card-title">Single-Way</h2>
                <p class="card-text">Aset of immutable values are passed to the components.</p>
              </div>
              <div class="col-3">
                <img className="card-img-top" src="./images/icon4.png" alt="declarative icon"/>
                <h2 class="card-title">JSX</h2>
                <p class="card-text">Statically-typed, designed to run on modern browsers.</p>
              </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;