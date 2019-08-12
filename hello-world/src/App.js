import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="space-between-line">
        <div><img src={require("../src/images/ironhack-logo.svg")} alt="first img"/></div>
        <div><img src={require("../src/images/menu-top.svg")} alt="first img"/></div> 
      </div> 
       
      <div class="container">
 <div class="row"></div>
 <div class="col-sm-6 align-items-md-start"> <h1>Say hello to ReactJS</h1>
        <div><p>You will learn a Frontend <br></br>framework from scratch to become a Ninja Developer</p></div>
      <div class="blanco">Awesome!</div>
      </div>
      </div>
      </header>
      
      <div class="container">
 <div class="row">
   <div class="col-sm-3"><img src={require("../src/images/icon1.png")} alt="first img"/><h3>Declarative</h3>
   <p>React makes it painless to create interactive UIs.</p>
   </div> 
   <div class="col-sm-3"><img src={require("../src/images/icon2.png")} alt="second img"/><h3>Components</h3>
   <p>Build encapsulated components that manage their state</p>
   </div> 
   <div class="col-sm-3"><img src={require("../src/images/icon3.png")} alt="third img"/><h3>Single-Way</h3>
   <p>A set of immutable values are passed to the component's.</p>
   </div> 
   <div class="col-sm-3"><img src={require("../src/images/icon4.png")} alt="fourth img"/><h3>JSX</h3>
   <p>Statically-typed. designed to run on modern browsers.</p>
   </div> 
   </div>
   </div>

   </div>
   
 
  );
}

export default App;
