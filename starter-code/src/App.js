import React, {Component} from 'react'
import './App.css'

class App extends Component{
  render(){
    return(
      <div className='App'>
        <header className='menu-top'>
          <img src='images/ironhack-logo.svg'/>
          <img src='images/menu-top.svg'/>
        </header>
        <div className='cta'>
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>You will learn a Frontend <br></br> framework from scratch to <br></br> become a Ninja Developer</p>
          <button>Awesome!</button>
        </div>
        <div className='Body'>
          <div className='logitos'>
            <img src='images/icon1.png' alt='icon1'></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div>
            <img src='images/icon2.png' alt='icon1'></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src='images/icon3.png' alt='icon1'></img>
            <h3>Single-way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src='images/icon4.png' alt='icon1'></img>
            <h3>Jsx</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;