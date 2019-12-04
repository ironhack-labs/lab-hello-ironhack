import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title'
import Navbar from './components/navbar'
import FooterElement from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="Content">
        <Title />
      </div>
      <footer className="footer">
        <FooterElement batman='./images/icon1.png' title='Declarative' text='React makes it painless to create interactve UIs.' />
        <FooterElement batman='./images/icon2.png' title='Components' text='Build encapsulated components that manage their state.' />
        <FooterElement batman='./images/icon3.png' title='Single-Way' text='A set of immutable values are passed to the components' />
        <FooterElement batman='./images/icon4.png' title='JSX' text='Statically-typed. desined to run on modern browsers' />
      </footer>
    </div>
  );
}

export default App;
