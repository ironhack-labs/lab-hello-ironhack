import React from 'react';
import './App.js';
import Menu from './Menu.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <Menu/>
        <h1>Say Hello to ReactJS</h1>
        <h2>You will learn a frontend framework from scratch, to become a Ninja Developer.</h2>
        <button>Awesome!</button>
      </div>
    );
  }
}

export default App;