import React,{Component} from "react";
import './App.css'

class App extends Component{
  render(){
    return(
      <div className='App'>
        <div className='Header'>
        <img src='images/ironhack-logo.svg'/>
        <img src='images/menu-top.svg'/>
        </div>
        <div className='Body'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Fronted framework from scratch,
          to become a Ninja Developer</p>
        <button>Awesome</button>
        </div> 
        <div className='Logitos'>
          <div>
            <img src='images/icon1.png' alt='Imagen1'/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src='images/icon2.png' alt='Imagen1'/>
            <h3>Declarative</h3>
            <p>Build encapsulated components that manage their states</p>
          </div>
          <div>
            <img src='images/icon3.png' alt='Imagen1'/>
            <h3>Declarative</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <img src='images/icon4.png' alt='Imagen1'/>
            <h3>Declarative</h3>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </div>   
      </div>
    )
  }
}
export default App