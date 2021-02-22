import React from "react";
import "./App.css";

import Main from "./Main";
import Card from "./Card";

const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";
const icon3 = "/images/icon3.png";
const icon4 = "/images/icon4.png";
const text1 = "React makes it painless to create interactive UIs";
const text2 = "Build encapsulated components that manage their state";
const text3 = "A set of immutable values are passed to the component's.";
const text4 = "Statistically-typed, designed to run on modern browser's."

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
          <div className="features">
          <Card icon={ icon1 } header="Declarative" text={text1}/>
          <Card icon={ icon2 } header="Components" text={text2}/>
          <Card icon={ icon3 } header="Single-Way" text={text3}/>
          <Card icon={ icon4 } header="JSX" text={text4}/>
          </div>
        </div>
    );
  }
}

export default App;
