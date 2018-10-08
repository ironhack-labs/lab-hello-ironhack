import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="first-section">
          <div className="nav-bar container-fluid">
            <div className="row">
                <img className="col-md-1" src="./images/ironhack-logo.svg"/>
                <div className="col-md-10"></div>
                <img src="./images/menu-top.svg"/>
                
            </div>
          </div>
          <div className="first-content">
            <h1 className="say-hello"> Say hello to ReactJS</h1>
            <h3 className="you-will-learn">You will learn a frontend framework from scratch, to become a Ninka developer.</h3>
            <button className="btn btn-light">Awesome!</button>
          </div>
        </div>

        <div className=" container-fluid"> 
            <div className="second-section row">
              {/* <div className="col-md-1"></div> */}
              <div className="declarative col-md-2">
                <img src="./images/icon1.png"/>
                <h3 className=""> Declarative</h3>
                <p className="">React makes it painless to create interactive UIs.</p>
              </div>
              <div className="components col-md-2">
                <img src="./images/icon2.png"/>
                <h3 className=""> Components</h3>
                <p className="">Build encapsulated components that manage their state.</p>
              </div>
              <div className="Single-way col-md-2">
                <img src="./images/icon3.png"/>
                <h3 className=""> Single-way</h3>
                <p className="">A set of  immutable values are passed to the components.</p>
              </div>
              <div className="JSX col-md-2">
                <img src="./images/icon3.png"/>
                <h3 className=""> JSX</h3>
                <p className="">Statistically-typed, deisgned to run on moder browsers.</p>
              </div>

            </div>

      </div>
      </div>


    );
  }
}

export default App;