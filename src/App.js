import React, { Component } from "react";
import "./App.css";
import Section from "./Section";
import Top from "./Top";

class App extends Component {
    render() {
        return (
            <div>
            <div className="top">
            <nav><img src="/images/ironhack-logo.svg" alt=""/>
            <img src="/images/menu-top.svg" alt=""/>
            </nav>
            <div>
            <Top icon="/images/react-logo.svg" title ="Say hello to ReactJS"
            text="You will learn how to use the most popular frontend library,
            and become a super Ninja developer."></Top>
            <button>Awesome!</button>
                
            </div>
                
            </div>
            <div className='bottom'>
                <div className="sections">
                <div className="section">
                <Section icon="/images/icon1.png" title="Declarative" 
                    text="React makes it painless to create interactive UIs."></Section>
                </div>
                <div className="section">
                <Section icon="/images/icon2.png" title="Components" 
                    text="Build encapsulated components that manage their state."></Section>
                </div>
                <div className="section">
                <Section icon="/images/icon3.png" title="Single-Way" 
                    text="A set of immutable values are passed to the components."></Section>
                </div>
                <div className="section">
                <Section icon="/images/icon4.png" title="JSX" 
                    text="Statically-typed, designed to run on modern browsers."></Section>
                </div>
            </div>
            </div>
            </div>
          );
    }
  }

export default App;