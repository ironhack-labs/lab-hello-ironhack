import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
     <div>
        <div className="App">
         <header>
           <img src="../images/ironhack-logo.svg" alt="Logo de Ironhack"/>
           <img src="../images/menu-top.svg" alt=""/>
         </header>
         <section>
           <h1>Say hello to ReactJS</h1>
           <p>You will learn a Frontend framework from scratch, to became an Ninka Developer</p>
           <button>Awesome!</button>
         </section>
         </div>
         <section class="Description">
         <ul>
           <li><img src="../images/icon1.png" alt=""/>
           <h3>Declarative</h3>
           <p>React makes it painless to create interactive UIs</p>
           </li>
           <li><img src="../images/icon2.png" alt=""/>
           <h3>Components</h3>
           <p>Build encapsulated componenets that manage their state</p>
            </li>
           <li><img src="../images/icon3.png" alt=""/>
           <h3>Single-Way</h3>
           <p>A set of inmutable values are passed to the component´s</p>
           </li>
           <li><img src="../images/icon4.png" alt=""/>
           <h3>JSX</h3>
           <p>Statically-typed, designed to run on modern browsers</p>
           </li>
         </ul>
         </section>
     </div>
      
    );
  }
}
export default App;
