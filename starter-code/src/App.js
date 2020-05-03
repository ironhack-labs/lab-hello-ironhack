import React from 'react';
import './App.css';
import Header from './components/Header' 
import Cards from './components/cards'

class App extends React.Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Cards />
      </div>
    )
  }
}

export default App;
