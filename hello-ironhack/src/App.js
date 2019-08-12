import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AweButton from './components/awesome-button'
import MyTitle from './components/title'
import TopMenu from './components/top-menu'
import Cards from './components/cards'



class App extends Component{

  render() {
    return (
      <main>
        <TopMenu />
        <MyTitle />
        <AweButton />
        <div className="div-card">
          <Cards />
        </div>
      </main>
    )
  }
}

export default App;
