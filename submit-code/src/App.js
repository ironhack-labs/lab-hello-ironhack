import React from 'react';
import logo from './logo.svg';
import './App.css';
import Point from "./Point"

function App() {
  return (
    <div className="App">
    <div className="points">
      < Point src="../public/images/icon1.png" heading="Declarative" txt="React makes if painless to create interactive UIs"/>
      < Point src=".../public/images/icon2.png" heading="Components" txt="Build encapsulated components that render their state"/>
      < Point src="../public/images/icon3.png" heading="Single-Way" txt="A set of immutable values are passed to components"/>
      < Point src="../public/images/icon4.png" heading="JSX" txt="Statically-typed, designed to run on modern browsers"/>
    </div>
    </div>
  );
}

export default App;
