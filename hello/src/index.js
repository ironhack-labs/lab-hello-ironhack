import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav'
import Card from './components/card'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <ul className="flex-container">
      <Card image="./images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Card image="./images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
      <Card image="./images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the components's."/>
      <Card image="./images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/>
    </ul>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
