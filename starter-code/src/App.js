import React from 'react';
import './App.css';
import Details from './Details';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Menu } from './menu.svg';
import declarative from './images/declarative.png';
import components from './images/components.png';
import singleway from './images/singleway.png';
import jsx from './images/jsx.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Logo className="logo" />
          <Menu className="menu" />
        </nav>
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p>
          You will learn a frontend
          <br /> framework from scratch, to
          <br /> become a Ninka developed
        </p>
        <div className="btn">
          <button>Awesome!</button>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-sm-3"><Details title="Declarative" info="React makes it painless to create interactive UIs" img={declarative} /></div>
          <div class="col-sm-3"><Details title="Components" info="Build encapsulated components that manage their state" img={components} /></div>
          <div class="col-sm-3"><Details title="Single Way" info="A set of immutable values are passed to the components" img={singleway} /></div>
          <div class="col-sm-3"><Details title="JSX" info="Statically types. Designed to run on modern browsers" img={jsx} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
