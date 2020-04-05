import React, { Component } from 'react';
import './App.css';
import { ReactComponent as IronhackLogo } from './ironhack-logo.svg';
import { ReactComponent as MenuTop } from './menu-top.svg';
import { ReactComponent as LogoReact } from './react-logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import Header from "./components/Header";
import Button from "./components/Button";
import Features from "./components/Features";

class App extends Component {
  render() {
    return (
      <div className="general-container">
        <div className="principal-container">
          <div className="nav-bar">
            <IronhackLogo width={70} />
            <MenuTop  width={40} />
          </div>
          <div className="background-logos">
              <LogoReact width={450} style={{marginLeft: "42rem", marginTop: "-2rem"}} />
              <LogoReact width={350} style={{marginLeft: "-20rem", marginTop: "23rem"}}/>
              <LogoReact width={350} style={{marginLeft: "-38rem", marginTop: "38rem"}}/>
              <LogoReact width={200} style={{marginLeft: "18rem", marginTop: "14rem"}}/>
              <LogoReact width={200} style={{marginLeft: "-12.5rem", marginTop: "30rem"}}/>
              <LogoReact width={200} style={{marginLeft: "-12.5rem", marginTop: "44rem"}}/>
          </div>
          <Header />
          <Button />
        </div>
        <div className="functions-container">
            <Features image={icon1} title="Declaratives" text="React makes it painless to create interactives UIs."/>
            <Features image={icon2} title="Components" text="Build encapsulated components that manage their state."/>
            <Features image={icon3} title="Single-Way" text="A set of immutable values are passed to the components."/>
            <Features image={icon4} title="JSX" text="Statically-typed, designed to run on modern browsers."/>
        </div>
      </div>
      
    );
  }
    
}

export default App;
