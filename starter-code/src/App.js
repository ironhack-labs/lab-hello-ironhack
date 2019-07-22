import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import BigImage from './components/BigImage';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BigImage />
      <Main />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
