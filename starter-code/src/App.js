import React from 'react';
import logo from './download.svg';
import './App.css';

function App() {
  return (
    <div className="App">



      <header className="App-header">
        <img src={logo} alt="logo" className="imglogo" />
        <img src="./images/reactl.svg" className="relogo"/>
        <div className="text">
          <h1 className="Textwidth">Say Hello to ReactJS </h1>

          <p className="Textwidth">You will learn a Frontend framework from sratch, to become a Ninja Developer</p>
        <button className="Awesome">Awesome</button>
        </div>
         </header>


    <div className="bottom">

      <div className="bottomimg">
        <img src="./images/icon1.png" />
        <br />
        <p>React makes it painless to create interactives UIs</p>
      </div>

      <div className="bottomimg">
        <img src="./images/icon2.png" />
        <br />
        <p>Build encapsulated components that manage their state</p>
      </div>

      <div className="bottomimg">
        <img src="./images/icon3.png" />
        <br />
        <p>
          A set of immutable values are passed to the component's
     </p>
      </div>

      <div className="bottomimg">
        <img src="./images/icon4.png" />
        <br />
        <p>
          Statically-typed, designed to work on modern browsers
     </p>
      </div>


    </div>
    
     </div >

  );
}

export default App;
