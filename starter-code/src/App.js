import React, { Component } from "react";
import "./App.css";

class App extends Component {


  render() {

    const logo = <img id='logo' src='/images/logoiron.png' />
    const menu = <img id='menu' src='/images/menutop.png' />

    const icon1 = <img src='/images/icon1.png' />
    const icon2 = <img src='/images/icon2.png' />
    const icon3 = <img src='/images/icon3.png' />
    const icon4 = <img src='/images/icon4.png' />
    const awesome = <img src='/images/awesome.png' />


    return (  //jsx element, jsx returned from display function

      <div className="App">

          <div class='content'>
          {logo}{menu}
          <h1 class='white'>Say hello to<br></br>
          ReactJS</h1>
          <p class='white'>You will learn a frontend</p>
          <p class='white'>framework from scratch. to</p>
          <p class='white'>become an nink developer</p>
          
          <br></br>
          {awesome}

          </div>


        <div class="flex-container">
  <div>
  {icon1}
  <p><strong>Declarative</strong></p>
  <p>React makes it<br></br> painless to create <br></br>interative UIs.</p>
  </div>
  <div>
  {icon2}
  <p><strong>Components</strong></p>
  <p>Build encapsulated <br></br>components that<br></br> manage their state.</p>
  </div>
  <div>
  {icon3}
  <p><strong>Single-Way</strong></p>
  <p>A set of immutable<br></br>values are passed to<br></br>the components</p>
  </div>  
  <div>
  {icon4}
  <p><strong>JSX</strong></p>
  <p>Statically-typed <br></br>designed to run on<br></br>modern browsers</p>
  </div>  
</div>

      </div>


    );
  }
}

export default App;