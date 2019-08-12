import React from 'react';
import logo from './logo.svg';
import './App.css';

/* --- Custom components --- */
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row">
          <Card title="Declarative" description="React makes it painless to create interactive UIs" image="/../images/icon1.png"/>
          <Card title="Components" description="Build encapsulated components that manage the state" image="/../images/icon2.png"/>
          <Card title="Single-Way" description="a set of inmutable values are passed to the component's" image="/../images/icon3.png"/>
          <Card title="JSX" description="Statically-typed designed to run a modern browsers" image="/../images/icon4.png"/>
        </div>

      </div>
    </div>
  );
}

export default App;
