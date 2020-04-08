import React from 'react';
import Header from './components/Header';
import ReactLogos from './components/ReactLogos';
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
          <ReactLogos className="div-1" numberCopies="1" />
          <ReactLogos className="div-2" numberCopies="3" />
          <ReactLogos className="div-3" numberCopies="2" />
        </div>
      </main>
      <div className="benefits">
        benef>ts
      </div>
    </div>
  )
}

export default App;
