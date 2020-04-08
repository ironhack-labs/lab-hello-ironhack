import React from 'react';
import Header from './components/Header';
import ReactLogos from './components/ReactLogos';
import BenefitTile from './components/BenefitTile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="App-main-left">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          </div>
          <button className="App-button">Awesome!</button>
        </div>
        <div className="App-main-right">
          <ReactLogos className="react-logos-1" numberCopies="1" />
          <ReactLogos className="react-logos-2" numberCopies="3" />
          <ReactLogos className="react-logos-3" numberCopies="2" />
        </div>
      </main>
      <div className="App-benefits">
        <BenefitTile
          image="/images/icon1.png"
          title="Declarative"
          text="React makes it painless to create interactive UIs."
          />
        <BenefitTile
          image="/images/icon2.png"
          title="Components"
          text="Build encapsulated components that manage their state."
          />
        <BenefitTile
          image="/images/icon3.png"
          title="Single-Way"
          text="A set of immutable values are passed to the components."
          />
        <BenefitTile
          image="/images/icon4.png"
          title="JSX"
          text="Statically-typed designed to run on modern browsers."
          />
      </div>
    </div>
  )
}

export default App;
