import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
      <img className="img-iron" src="/images/ironhack-logo.svg" alt=""/>
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn Frontend <br/>framework from scratch, to <br/>become an Ninja Developer</p>
        <button>Awesome!</button>
        <div className="secciones">
            <div>
                <img src="/images/icon1.png" alt=""/>
                <h3>Declarative</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis aut consectetur earum. Eaque, fuga.</p>
            </div>
            <div>
                <img src="/images/icon2.png" alt=""/>
                <h3>Components</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis aut consectetur earum. Eaque, fuga.</p>
            </div>
            <div>
                <img src="/images/icon3.png" alt=""/>
                <h3>Single-Way</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis aut consectetur earum. Eaque, fuga.</p>
            </div>
            <div>
                <img src="/images/icon4.png" alt=""/>
                <h3>JSX</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis aut consectetur earum. Eaque, fuga.</p>
            </div>
            
            
            
            
        </div>
      </div>
    );
  }
}

export default App;