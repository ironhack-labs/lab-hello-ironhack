import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id="banner">
        <div id="banner-content">
          <h1>Say hello to ReactJS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus animi asperiores commodi earum eos
            eveniet facilis fugit harum ipsa, necessitatibus nulla perferendis quas saepe, sint? Necessitatibus nesciunt
            non veniam.</p>
          <div className="box">Awesome!</div>
        </div>
        <img className="reactlogo-1" src={require('./public/images/react-logo.svg')} alt=""/>
        <img className="reactlogo-2" src={require('./public/images/react-logo.svg')} alt=""/>
        <img className="reactlogo-3" src={require('./public/images/react-logo.svg')} alt=""/>
      </div>
      <div id="info">
        <Card icon={require('./public/images/icon1.png')} title="Declarative" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Card icon={require('./public/images/icon2.png')} title="Components" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        <Card icon={require('./public/images/icon3.png')} title="Single-Way" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        <Card icon={require('./public/images/icon4.png')} title="JSX" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
      </div>
    </div>
  );
}

export default App;
