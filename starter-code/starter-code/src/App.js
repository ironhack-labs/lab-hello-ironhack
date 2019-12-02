import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Info from './components/Info'
import Button from './components/Button'
import Section from './components/Section'

function App() {
  return (
    <div className='App'>
      <div className='principal'>
        <Navbar logo="./images/ironhack-logo.svg" bar="./images/menu-top.svg" />
      
        <Title header="Say hello to ReactJS" />

        <Info info="You will learn a frontend framework from scratch, to become a Ninja Developer" />

        <Button text="Awesome!" />

      </div>

      <div className='Section'>

        <Section image='./images/icon1.png' title="Declarative" description="React makes it painless to create iteractive UIs" />

        <Section image='./images/icon2.png' title="Components" description="Build encapsulated components that manage their state" />

        <Section image='./images/icon3.png' title="Single-Way" description="A set of inmutable values are passed to the component's" />

        <Section image='./images/icon4.png' title="JSX" description="Statically-typed, designed to run on modern browsers" />

      </div>
    </div>
  );
}

export default App;
