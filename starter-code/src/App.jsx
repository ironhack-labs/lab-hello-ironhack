import React, { Component } from 'react';
import './App.css';
import ConstructBoxes from './ConstructBoxes';

class App extends Component {
  render() {

    

    const arrObj = [
    {
      title: 'Declarative',
      parag: 'React makes it painless to creat interactive UIs.',
      img: '../images/icon1.png',
    },
    {
      title: 'Components',
      parag: 'Build encapsulated components that manage their state.',
      img: '../images/icon2.png',
    },
    {
      title: 'Single-Way',
      parag: 'A set of immutable values are passed to the component\'s',
      img: '../images/icon3.png',
    },
    {
      title: 'JSX',
      parag: 'Statically-tiped, designed to run on modern browsers.',
      img: '../images/icon4.png',
    }
  ]
    return(
      <main>
        <section id="main-section">
          <header id="header">
            <figure className="logo">
              <img src="../images/ironhack-logo.svg" alt="Ironhack logo"/>
            </figure>
            <figure className="nav">
              <img src="../images/menu-top.svg" alt="Ironhack logo"/>
            </figure>
          </header>
          <div className="title">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a frontend framework from scratch, to become a Ninja Developer</p>
          </div>
            <button className="btn">Awesome!</button>
        </section>
        <div className="boxes-component">
          <ConstructBoxes obj={arrObj[0]} />
          <ConstructBoxes obj={arrObj[1]} />
          <ConstructBoxes obj={arrObj[2]} />
          <ConstructBoxes obj={arrObj[3]} />
        </div>
      </main>
    );
  
  

  }
}

export default App;
