import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <div>
        <section className="first-section">
          <div className="container">
          <div className="navbar">
              <img src="/images/ironhack-logo.svg" alt=""/>
              <img src="/images/menu-top.svg" alt=""/>
            </div>

            <div className="message">
              <h1>Say Hello to </h1>
              <h1>ReactJS</h1>
              <p>You will learn a Frontend framework from scratch, to become Ninja Developers</p>
              <button> Awesome!</button>
            </div>
          </div>
        </section>
        <div className="container">
        <section className="second-section">
            <div>
            <img src="/images/icon1.png" alt=""/>
              <h6>Declarative</h6>
              <p>React makes it painless to create interactive apps.</p>
            </div>

            <div>
              <img src="/images/icon2.png" alt=""/>
              <h6>Components</h6>
              <p>Build encapsulated components that manage their state.</p>
            </div>

            <div>
              <img src="/images/icon3.png" alt=""/>
              <h6>Single-Way</h6>
              <p>A set of inmmutable values are passed to the componets.</p>
            </div>

            <div>
              <img src="/images/icon3.png" alt=""/>
              <h6>JSX</h6>
              <p>Statically-typed designed to run on modern browsers</p>
            </div>
         
        </section>
        </div>
      </div>
    );
  }
}


export default App;
