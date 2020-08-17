import React, { Component } from "react";

import "./App.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='PartI'>
            <h1 className='Text'> Say hello to ReactJS </h1>
            <h3 className='SubText'> You will learn a Frontend framework from scratch, to become an Ninja Developer </h3>
            <button className='Button'> Awesome </button>
        </div>
        <div className='PartII'>
            <div className='Component'>
                <img src='images/icon1.png' alt='decoratives logo' />
                <h2> Declarative </h2>
                <h3> React makes it painless to create interactive Uls. </h3>
            </div>
            <div className='Component'>
                <img src='images/icon2.png' alt='decoratives logo' />
                <h2> Components </h2>
                <h3> Build encapsulated components that manage their state </h3>
            </div>
            <div className='Component'>
                <img src='images/icon3.png' alt='decoratives logo' />
                <h2> Single - Way </h2>
                <h3> A set of immutable values are passed to the components </h3>
            </div>
            <div className='Component'>
                <img src='images/icon4.png' alt='decoratives logo' />
                <h2> JSX </h2>
                <h3> Statically-typed, designed to run on modern browsers. </h3>
            </div>
        </div>
    
      </div>
    );
  }
}
 
export default App;

