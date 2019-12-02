import React, { Component } from "react";
import "./App.css";
import CuadraoToGuapo from "./cuadraoToGuapo/cuadraoToGuapo";

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <CuadraoToGuapo img="/images/icon1.png" text1="Declarative" text2="Reack makes it painless to create interactive UIs"></CuadraoToGuapo>
        <CuadraoToGuapo img="/images/icon2.png" text1="Components" text2="Build encapsulated componentes that manage their state"></CuadraoToGuapo>
        <CuadraoToGuapo img="/images/icon3.png" text1="Single-Way" text2="A set of immutable values are passed to the components"></CuadraoToGuapo>
        <CuadraoToGuapo img="/images/icon4.png" text1="JSX" text2="Statically-typed designed to run on modern browsers"></CuadraoToGuapo>
      </div>
    );
  }
}

export default App;
