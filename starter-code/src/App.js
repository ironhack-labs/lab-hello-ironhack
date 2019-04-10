
import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    const title = <h1>Say hallo to<br/> ReactJS</h1>;
    const subtitle = <p>You will learn a FrontEnd<br/> framework from scratch<br/> to become a Ninka Developer</p>;
    const logo  = <img src="/images/react-logo.svg"/>;
    const ironhackLogo  = <img src="/images/ironhack-logo.svg"/>;
    const menuTop  = <img src="/images/menu-top.svg"/>;
    const button = <button>Awesome!</button>
    const icon1  = <div><img src="/images/icon1.png"/><h3>Declarative</h3><p>React makes it painless to create interactive UIs.</p></div>;
    const icon2  = <div><img src="/images/icon2.png"/><h3>Components</h3><p>Build encapsulated components that manage their state.</p></div>;
    const icon3  = <div><img src="/images/icon3.png"/><h3>Single-Way</h3><p>A set of immutable values are repassed to the components.   </p></div>;
    const icon4  = <div><img src="/images/icon4.png"/><h3>JSX</h3><p>Statically-typed, designed to run on modern browsers.</p></div>;
    return  (
        <div className="App">
            <nav>
                <div>{ironhackLogo}
            {menuTop}</div>
            
            {logo}
            {title} 
            {subtitle}
            {button}
            </nav>
            <div className="Container">
                {icon1}
                {icon2}
                {icon3}
                {icon4}
            </div>
        </div>
       
        
        );    
    
  }
}

export default App;