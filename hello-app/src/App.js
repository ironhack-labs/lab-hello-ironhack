import React from 'react';
import NavBar from './NavBar'
import Button from './Button'
import Features from './Features'
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Button />
        </header>
        <section className="Features">
          <Features name="Declarative" description="React makes it painless to create interactive UIs" image="./icon1.png" />
          <Features name="Components" description="Build encapsulated components that manage their state" image="./icon2.png" />
          <Features name="Single-Way" description="A set of immutable values are passed to the component's" image="./icon3.png" />
          <Features name="JSX" description="Statically-typed, designed to run on modern browsers" image="./icon4.png" />
        </section>
      </div>
    </>
  );
}

export default App;