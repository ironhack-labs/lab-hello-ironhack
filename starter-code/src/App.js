import React from "react";
import "./App.css";
import ProductGrid from "./ProductsGrid";

function App() {
    return (
      <section>
        <nav>
            <img src="/images/ironhack-logo.svg" className="logo" alt=""></img>
            <img src="/images/menu-top.svg" className="menu" alt=""></img>
          </nav>
        <section className="front">
          
          <div className="text">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn Frontend framework from scratch, to becaome an Ninka Developer.</p>
          <button className="button">Awseome!</button>
          </div>
          <div className="middle">
            <img src="/images/react-logo.svg" className="logo1"  alt=""></img>
            <img src="/images/react-logo.svg" className="logo2" alt=""></img>
            <img src="/images/react-logo.svg" className= "logo3" alt=""></img>
          </div>
            <div className="vertical">
            <img src="/images/react-logo.svg" alt=""></img>
            <img src="/images/react-logo.svg" alt=""></img>
            <img src="/images/react-logo.svg" alt=""></img>
          </div>
        </section>
        <section className="product">
          <ProductGrid></ProductGrid>
        </section>
      </section>
    
    );
  }

export default App;