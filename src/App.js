import React, { Component } from "react";
import "./App.css";
import FeatureBox from "./components/FeatureBox/FeatureBox"
import MainPanel from "./components/MainPanel/MainPanel"


class App extends Component {
  render() {    
    return (
      <div>
        <MainPanel title="Say hello to ReactJS" text="You will learn how to use he most popular frontend library, and become a super Ninja developer" menu="../images/menu-top.svg" logo="../images/ironhack-logo.svg" buttonText="Awesome!"/>
        <div className = "FeaturesPanel">
          <FeatureBox title="Declarative" description="React makes it painless to create interactive UIs." imgUrl="../images/icon1.png"/>
          <FeatureBox title="Components" description="Build encapsulated components that manage their state." imgUrl="../images/icon2.png"/>
          <FeatureBox title="Singles-Way" description="A set of immutable values are passed to the component's." imgUrl="../images/icon3.png"/>
          <FeatureBox title="JSX" description="Statically-typed, designed to run on modern browsers." imgUrl="../images/icon4.png"/>
        </div>
      </div>
    );
  }
}

export default App;
