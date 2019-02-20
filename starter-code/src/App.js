import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
        <div className="App">
        <div className="blueBackground">
        <div className="navbar">
            <img src="/images/ironhack-logo.svg" alt="i"/>
            <img src="/images/menu-top.svg" alt=""/>
        </div>
        <div className="hero">
            <h1 className="sayHello">Say hello to <br/> ReactJS</h1>
            <p className="description"> You will learn a frontend <br/> framework from scratch, to <br/> become a Ninja Developer</p>
            <a className="awesome">Awesome!</a>
        </div>
        </div>
        <div className="whiteBackground">
            <div className="iconContainer">
                <div className="textBox">
                    <img src="/images/icon1.png" alt=""/>                
                    <h3 className="titleText">Declarative</h3>
                    <p className="textText">React makes it painless to create interactive UIs</p>
                </div>
                <div className="textBox">
                    <img src="/images/icon2.png" alt=""/>                
                    <h3 className="titleText">Components</h3>
                    <p className="textText">Build Encapsulted Components that manage their state</p>
                </div>
                <div className="textBox">
                    <img src="/images/icon3.png" alt=""/>                
                    <h3 className="titleText">Single-Way</h3>
                    <p className="textText">A set of inmutable values that are passed to the components</p>
                </div>
                <div className="textBox">
                    <img src="/images/icon4.png" alt=""/>                
                    <h3 className="titleText">JSX</h3>
                    <p className="textText">Statically typed designed to run on modern browsers</p>
                </div>

                
            </div>
        </div>
      <div className="Nav">
        <img src="" alt=""/>
      </div>
      </div>
    );
  }
}

export default App;