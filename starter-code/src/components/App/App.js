import React, {Component} from 'react';

import Header from '../Header/Header'
import Features from '../Features/Features'
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Features></Features>
      </div>
    );
  }
}

export default App;
