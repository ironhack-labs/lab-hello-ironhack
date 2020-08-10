import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="images">
                <img className="r1" src="../images/react-logo.svg" />
                <img className="r2" src="../images/react-logo.svg" />
                <img className="r3" src="../images/react-logo.svg" />
          </div>
          <nav>
            <img src="../images/ironhack-logo.svg" />
            <img src="../images/menu-top.svg" />
          </nav>
          <div className="main">
            <div className="main-div">
                <h1> Say hello to ReactJS </h1>
                <p className="main-p">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                <button className="btn">Awesome!</button>
            </div>
            
          </div>  
        </header>
        <article className="boxes">
            <div className="box">
                <img src="../images/icon1.png" />
                <h5>Declarative</h5>
                <p className="box-p">React makes it painless to create interactive UIs.</p>
            </div>
            <div className="box">
                <img src="../images/icon2.png" />
                <h5>Components</h5>
                <p className="box-p">Build encapsulated components that manage their state.</p>
            </div>
            <div className="box">
                <img src="../images/icon3.png" />
                <h5>Single-Way</h5>
                <p className="box-p">A set of immutable values are passed to the components.</p>
            </div>
            <div className="box">
                <img src="../images/icon4.png" />
                <h5>JSX</h5>
                <p className="box-p">Statically-typed, designed to run on modern browsers.</p>
            </div>
        </article>
      </div>
    );
  }
}
 
export default App;