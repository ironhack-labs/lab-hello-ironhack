import React from 'react';
import './App.css';
import Nav from './components/nav'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <div className="title-text">
          <h1>Say Hello to React JS</h1>
          <p>You will learn a frontend framework from scratch, to become a Ninja Developper.</p>
        </div>
        <button className="button">Awesome!</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
