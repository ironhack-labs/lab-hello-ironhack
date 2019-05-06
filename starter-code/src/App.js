import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    // const formatName = (user) => {
    //   return `${user.firstName} ${user.lastName}`;
    // }   
    const logo = <img src='./images/ironhack-logo.svg'   />  
    const logo2 = <img class="imgMenu" src='./images/menu-top.svg'   /> 
    const logo3 = <img class="imgMenu" src='./images/react-logo.svg' width="100" height="100"  /> 
    const logo4 = <img class="imgMenu" src='./images/react-logo.svg' width="150" height="150"  /> 

    const photos = {
      icon1: '/images/icon1.png',
      icon2: '/images/icon2.png',
      icon3: '/images/icon3.png',
      icon4: '/images/icon4.png',      
    }

    const navHome = (      
        <nav class="navbar navbar-dark bg-light" id="navBar">            
            <img src={logo} width="30" height="30" alt="" />            
        </nav>       
    );
    
    const element1 = (
        <div class="card">
        <img src={photos.icon1} class="card-img-top" width='300' height='300'/>
        <div class="card-body">
          <h3 class="card-title">declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>  
      </div>
    );
    const element2 = (
        <div class="card">
          <img src={photos.icon2} class="card-img-top" width='300' height='300'/>
          <div class="card-body">
            <h3 class="card-title">declarative</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>  
        </div>
      );
      const element3 = (
        <div class="card">
          <img src={photos.icon3} class="card-img-top" width='300' height='300'/>
          <div class="card-body">
            <h3 class="card-title">declarative</h3>
            <p>A set of inmutable values are passed to the component's</p>
          </div>  
        </div>
      );
      const element4 = (
        <div class="card">
          <img src={photos.icon4} class="card-img-top" width='300' height='300'/>
          <div class="card-body">
            <h3 class="card-title">declarative</h3>
            <p>Statically-typed. Designed tu run on modern browsers.</p>
          </div>  
        </div>
      );
 
    return (
      <div className="App">
        <div id="home" >
          {logo}
          {logo2}
          <h1> Say hello to ReactJS </h1>
          <p>You will learn a Frontend framework from scratch. to bacome a nija developer</p>              
          <button>Awesome!</button>
        <div class='logoMedium'> 
          {logo4}
        </div>
        <div class='logoColumn'>
          {logo3}
          {logo3}
          {logo3}
        </div>  
        </div>    
        <div class="card-deck">          
            {element1}   
            {element2} 
            {element3} 
            {element4}      
        </div>
      </div>   
    );
  }
}

export default App;

