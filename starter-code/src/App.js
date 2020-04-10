import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import TextImg from "./TextImg";
import Feature from "./Feature"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header image="./images/ironhack-logo.svg" imageTitle="IronHack" />

        <TextImg />

        <section className="flex pt-md flex-4">
          <Feature imgsrc="./images/icon1.png" imgalt="Declarative" title="Declarative" desc="React makes it painless to create interactive UIs" />
          <Feature imgsrc="./images/icon2.png" imgalt="Components" title="Declarative" desc="React makes it painless to create interactive UIs" />
          <Feature imgsrc="./images/icon3.png" imgalt="Single Way" title="Declarative" desc="React makes it painless to create interactive UIs" />
          <Feature imgsrc="./images/icon4.png" imgalt="jsx" title="JSX" desc="React makes it painless to create interactive UIs" />
        </section>
      </div>
    );
  }
}
export default App;
