import React from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Article">
        <Article image="/images/icon1.png" title="Declarative" info="React makes it painless to create interactive UIs" />
        <Article image="/images/icon2.png" title="Components" info="Build encapsulated components that manage their state" />
        <Article image="/images/icon3.png" title="Single-Way" info="A set of immutable values are passed to the component's" />
        <Article image="/images/icon4.png" title="JSX" info="Statically-typed designed to run on modern browsers" />
      </div>
    </div>
  );
}

export default App;
