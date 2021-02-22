import React from "react";
import "./App.css";



class App extends React.Component {
  render() {
    return (
      <div>
        <div className="background" style={{ backgroundColor: "navy" }}>
          <div className="navbar">
            <img className="nav-img" src="images/ironhack-logo.svg" />
            <img className="nav-img" src="images/menu-top.svg" />
          </div>
          <div className="text">
            <h1> Say hello to ReactJS </h1>
            <p>
              You will learn how to use <br />
              the most popular front-end library,
              <br />
              and become a super ninja developer
            </p>
            <button>Awesome!</button>
          </div>
        </div>
​       
        <div className="box-container">
            <div className="box">
            <img src="images/icon1.png" />
            <h3> Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="box">
            <img src="images/icon2.png" />
            <h3>Components</h3>
            <p>
                Build encapsulated components that manage their state
            </p>
            </div>
            <div className="box">
            <img src="images/icon3.png" />
            <h3> Single-Way</h3>
            <p> set of immutable values are passed to the components</p>
            </div>
            <div className="box">
            <img src="images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
