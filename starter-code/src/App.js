import React, { Component } from "react";
import "./App.css";
import Product from "./Product";
import Header from "./Header";
import SmallAtom from "./SmallAtom";

class App extends Component {
  render() {
    
    const Bigatom = (
        <div className="atom">
            <img src="/images/react-logo.svg" width='200'/>
            <img src="/images/react-logo.svg" width='160'/>
            <img src="/images/react-logo.svg" width='120'/>
        </div>)
    
    const slogan = 
        <div className="slogan">
                <h1> Say hello to ReactJS </h1>
                <h2>You will learn a Frontend framework from scratch, to become an Nikan Developer.</h2>
                <button> Awesome!</button>
        </div>
  
    return (
      <div className="App">
            
            <div className="main">

                <Header logo="images/ironhack-logo.svg" menu="images/menu-top.svg" />
                
                <div className="centro">
                    {slogan}
                    {Bigatom}
                    <SmallAtom image="/images/react-logo.svg"/>
                </div>

            </div>

            <div className="products">
                <Product name="Declarative" image="images/icon1.png" description="React makes it painless to create interactives UIs."/>
                <Product name="Components" image="images/icon2.png" description="Builds encansulated Components that manage their state."/>
                <Product name="Single way" image="images/icon3.png" description="A set of inmutables values are passed to the component's."/>
                <Product name="JSX" image="images/icon4.png" description="Statically-type designed to run on modern browsers."/>
            </div>
            
      </div>
      
    );
  }
}

export default App;