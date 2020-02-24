import React, { Component } from "react";
import "./App.css";
import ProductFeature from "./ProductFeature/ProductFeature";

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
          <ProductFeature name="Declarative" image="../images/icon1.png">React makes it painless to create interactive UIs</ProductFeature>
          <ProductFeature name="Components" image="../images/icon2.png">Build encapsulated componenets that manage their state</ProductFeature>
          <ProductFeature name="Single-Way" image="../images/icon3.png">A set of inmutable values are passed to the component´s</ProductFeature>
          <ProductFeature name="JSX" image="../images/icon4.png">Statically-typed, designed to run on modern browsers</ProductFeature>
         </ul>
         </section>
     </div>
      
    );
  }
}
export default App;
