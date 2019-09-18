import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import ironhackLogo from './ironhack-logo.svg';
import menuLogo from './menu-top.svg';
import reactBckgrd from './react-logo.svg'

function App() {
  return (
    <div className="App">
    <div class="theNavBar">
    <img src={ironhackLogo} alt="Ironhack-Logo"/>
    <img src={menuLogo} alt="menu-Logo"/>
    </div>


      <div className="App-header">
      <div className="helloReact">
    <h1>Say hello to ReactJS</h1>
    <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.
    </p>
    <button>Awesome!</button>
    </div>
    <div>
    <img className="react1" src={reactBckgrd} alt="React-Logo"/>
    <img className="react2" src={reactBckgrd} alt="React-Logo"/>
    <img className="react3" src={reactBckgrd} alt="React-Logo"/>
    </div>
      </div>

     
    <Footer />

    </div>
  );
}

export default App;
