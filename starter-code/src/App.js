import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Hero">
          <nav>
            <div>
              <img src="/images/ironhack-logo.svg" />
            </div>
            <div>
              <img src="/images/menu-top.svg" />
            </div>
          </nav>

          <div className="LeftRight">
            <div className="Left">
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn a Frontend framwork from scratch, to become an
                Ninja Developer
              </p>
              <button>Awesome</button>
            </div>

            <div classNAme="Right">
              <div>
                <img src="/images/react-logo.svg" className="Img1" />
              </div>
              <div>
                <img src="/images/react-logo.svg" className="Img2" />
              </div>
              <div>
                <img src="/images/react-logo.svg" className="Img3" />
              </div>
            </div>
          </div>
        </div>

        <div className="Flex">
          <div className="Block">
            <img src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>

          <div className="Block">
            <img src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
          </div>

          <div className="Block">
            <img src="/images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>

          <div className="Block">
            <img src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
