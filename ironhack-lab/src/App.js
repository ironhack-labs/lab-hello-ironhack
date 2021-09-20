import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';
import reactLogo from "./react-logo.svg"
import Card from "./Card"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu} className="menu" alt="menu" />
      </header>

      <div className="background-figures">
        <img src={reactLogo} className="fig-1" alt="react-logo" />
        <img src={reactLogo} className="fig-2" alt="react-logo" />

      </div>

      <section className="main-section">
        <h1 className="title">Say hello to <br /> ReactJS</h1>

        <p className="description">
          You will learn how to use 
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>

        <a href="#" className="button"> Awesome! </a>
      </section>

      <section className="cards-section">
        <Card image="/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Card image="/icon2.png" title="Components" description="Build encapsulated components that manage their state"/>
        <Card image="/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component"/>
        <Card image="/icon4.png" title="JSX" description="Statically-typed designed to run on modern browsers"/>
      </section>
    </div>
  );
}

export default App;
