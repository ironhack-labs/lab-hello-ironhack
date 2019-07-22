import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/main'
import Nav from './Components/nav'
import Body from './Components/body'
import Footer from './Components/footer'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Body/>   
      <Footer/>   
    </div>
  );
}

export default App;
