import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="big-container">
          <nav className="nav">
            <p className="Logo1">
              <img src="../images/ironhack-logo.svg" />
            </p>

            <p className="Logo2">
              <img src="../images/menu-top.svg" />
            </p>
          </nav>
          <div className="big-block">
            <div className="both_title">
              <div className="title">Say hello to ReactJS</div>
              <div className="subtitle">
                You will learn a Frontend framework from scratch, to become an
                Ninja Developer
              </div>
            </div>
            <div>
              <button>Awesome!</button>
            </div>
          </div>
        </div>

        <footer>
          <div className="foofoo">
            <div className="foo">
              <img src="/images/icon1.png" />
              <p>Declarative</p>
            </div>
            <div className="foo">
              <img src="/images/icon2.png" />
              <p>Component</p>
            </div>
            <div className="foo">
              <img src="/images/icon3.png" />
              <p>Single-way</p>
            </div>
            <div className="foo">
              <img src="/images/icon4.png" />
              <p>JSX</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
