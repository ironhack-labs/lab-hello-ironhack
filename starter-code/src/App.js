import React, { Component } from 'react'
import './App.css';



class App extends Component{
  render(){
    return(
      <div className='App' >
        <header className='header' >
          <img src="images/ironhack-logo.svg"/>
          <img src="images/menu-top.svg" />
        </header>
        <div className='contenedor' > 
          
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to becaome an Ninka Developer</p>
          <button className='boton'  > Awesome </button>
        </div>
      <div className='loguitos' >
         <div> 
           <img src="images/icon1.png" /> 
           <h5>Declarative</h5>
           <p>React makes it painless to create interactive Uls</p>
         </div>
         <div> 
           <img src="images/icon2.png" /> 
           <h5>Components</h5>
           <p>Build encapsulated components that manage their state</p>
         </div>
         <div> 
           <img src="images/icon3.png" /> 
           <h5>Single-Way</h5>
           <p>A set of immulable values are passed to the component's</p>
         </div>
         <div> 
           <img src="images/icon4.png" /> 
           <h5>JSX</h5>
           <p>Statically-typed designed to run on modern browsers</p>
         </div>
      </div>
      </div>
    )
  }
}



export default App; 
