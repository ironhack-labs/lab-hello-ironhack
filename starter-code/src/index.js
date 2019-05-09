import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/navbar"
import Cuadrito from "./components/cuadrito";


import "./styles.css";

function App() {

    const uno = {
        titulo:'Declarative',
        descri:'React makes it painless to create interactive Uls',
        img:'images/icon1.png'
    };
    const dos = {
        titulo:'Components',
        descri:'Build encapsuled components that manage their state.',
        img:'images/icon2.png'
    };
    const tres = {
        titulo:'Single-Way',
        descri:'A set of immutable values are passed to the component`s',
        img:'images/icon3.png'
    };
    const cuatro = {
        titulo:'JSX',
        descri:'Statically-typed designed to run on modern browsers',
        img:'images/icon4.png'
    };



  return (
    <div>
      <div> 
        <Navbar />
        <div className="cuadro">
          <h1>Say hello to</h1>
          <h1> ReactJs</h1>
          <h2>You will learn a </h2>
          <h2>framework from scratch, to </h2>
          <h2>become a Ninka Developer </h2>
          <h3 className='boton'> Awesome!</h3>          
        </div>
      </div>
      <div className="cont2">
     <Cuadrito data = {uno} />
     <Cuadrito data = {dos} />
     <Cuadrito data = {tres} />
     <Cuadrito data = {cuatro} />
     </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);