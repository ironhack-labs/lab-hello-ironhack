import React, {Component} from 'react';
import './App.css'
 class App extends Component{
  render() {
    return(
      <div className='App'>
        <header>
          <img className="logo" src="images/ironhack-logo.svg" />
          <img className="menuTop" src="images/menu-top.svg"/>
        </header>
        <div className="Body">
        <h1>Say hello to <br/> ReactJS</h1> <br/> 
        <p>You will learn a frontend <br/>framework from scratch, to <br/> become a ninja developer</p>  
        <button>
          Awesome!
        </button>
        </div>
         <div className="logos">
        <div>
          <img src="images/icon1.png" alt="icon1"/>
          <h3>Declarative</h3>
          <p>React makes it <br/> painless to create <br/>interactive UIs</p>
        </div>
        <div>
          <img src="images/icon2.png" alt="icon1"/>
          <h3>Components</h3>
          <p>Build encapsulated<br/> components that<br/> manage their state</p>
        </div>
        <div>
          <img src="images/icon3.png" alt="icon1"/>
          <h3>Single-Way</h3>
          <p>A set of immutable <br/>values are passed to <br/>the components</p>
        </div>
        <div>
          <img src="images/icon4.png" alt="icon1"/>
          <h3>jsx</h3>
          <p>Statically-typed <br/> designed to run on<br/> modern browsers</p>
        </div>
        </div>
      </div>
    )
  }
}
 export default App;
