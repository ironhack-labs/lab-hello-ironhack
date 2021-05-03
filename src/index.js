import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './Index.css';

function Landing() {
  return (
    <div className="Landing">
      <div className="first-section">
        <nav>
          <img className="logo" src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
          <img className='topmenu' src='/images/menu-top.svg' alt='menu-top'></img>
        </nav>
        <div className='title-container'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and beacome a super Ninja developer</p>
        </div>
        <button className='button'>Awesome!</button>
      </div>

      <div className="cards">
        <Card  cardImage='/images/icon1.png' cardTitle='Declarative' cardDescription='React makes it painless to create interactive UIs'/>
        <Card  cardImage='/images/icon2.png' cardTitle='Components' cardDescription='Build encapsulated components that manage their state'/>
        <Card  cardImage='/images/icon3.png' cardTitle='Single-Way' cardDescription='A set of immutable values are passed to the components'/>
        <Card  cardImage='/images/icon4.png' cardTitle='JSX' cardDescription='Statically-typed, designed to run on modern browsers'/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

