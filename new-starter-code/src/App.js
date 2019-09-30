import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {

    const element = (
      <nav className="menu">
      <img src='/images/ironhack-logo.svg'/>
      <img className="menu-item" src='/images/menu-top.svg'/>
      </nav>
    );

    const section = (
      <section className="section-icons">
        <div className="row-icons">
          <img src='/images/icon1.png'/>
          <div class="text">
          <h1>Declarative</h1>
          <p class="center">React makes it<br></br> painless to create<br></br> interactive UIs.</p>
          </div>
         </div> 

         <div className="row-icons">
          <img src='/images/icon2.png'/>
          <div class="text">
          <h1>Components</h1>
          <p class="center">Build encapsulated<br></br> components that<br></br> manage their state. </p>
          </div>
         </div>

         <div className="row-icons">
          <img src='/images/icon3.png'/>
          <div class="text">
          <h1>Single-Way</h1>
          <p class="center">A set of immutable<br></br> values are passed to<br></br> the component's.</p>
         </div>
         </div>

         <div className="row-icons">
          <img src='/images/icon4.png'/>
           <div class="text">
          <h1>JSX</h1>
          <p class="center">Statically-typed,<br></br> designed to run on<br></br> modern browsers.</p>
         </div>
         </div>

      </section>
    );
   
    return (
      <div> 
        <section className="main">
        {element} 
        <div className="react-main">
          <h1> Say hello to ReactJS </h1>
          <p class="learn"> 
            You will learn a Frontend framework from scratch, to become an Ninka Developer.
          </p>
          <div class="awesom3">
          <p className="awesome"> Awesome! </p>
          </div>
        </div>
        </section>
        {section}
      </div>
      );
  }
}
export default App;


