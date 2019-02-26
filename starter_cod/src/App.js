import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Features from './components/Features';

class App extends Component {
  render() {
    return (
      <div>

       <Header />
       <Section />
       <Features />
        
      </div>
    );
  }
}

export default App;
