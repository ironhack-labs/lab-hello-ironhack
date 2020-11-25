import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ImageBox from './components/ImageBox';
// import logo from './logo.svg';


import './App.css';

class App extends Component {
  render() {

    const bannerTitle = 'Say hello to AngularJS';
    const bannerText = 'You will learn how to use the most popular frontend library, and become a super Ninja developer.';

    const icons = [

      { 
        icon: './images/icon1.png',
        title: 'Declarative',
        text: "React makes it painless to create interactive UIs.",
      },
      {
        icon: "./images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state.",
    },
      {
        icon: "./images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the component's",
      },
      {
        icon: "./images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers",
      },
      ]
      
      return (
        <div className='App'>
          <Header logo="./images/ironhack-logo.svg" menu="./images/menu-top.svg" />

          <Banner title={bannerTitle} text={bannerText} button="Awesome!" />

          <section id="features">
          {icons.map((item, index) => 
            <ImageBox key={item.index} icon={item.icon} title={item.title} text={item.text} />
          )}

          </section>
        </div>
      );
    }

  }

  export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
