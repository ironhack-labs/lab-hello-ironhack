import React from 'react';
import './App.css';

import Logo from "./images/ironhack-logo.svg";
import Menu from "./images/menu-top.svg";

import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";



function App() {
  return (
    <div className="App">


      
      <header className="App-header background">

      <img src={Logo}   alt="ironhack-logo" className="logo1"  />
      <img src={Menu}   alt="menu" className="menu"  />

        <h1>
        Say Hello to  <br /> 
        ReactJS       
        </h1>

        <p>
        You will learn a FrontEnd <br /> 
        framework from scratch, to <br /> 
        become a Ninka Developer.
        </p>

        <button className= "button" >Awesome! </button>
      </header>

      <section>
                <article>
                    <img src={img1}   alt="icono1" />
                    <h4>Declarative</h4>
                    <p>
                      React makes it      <br />
                      painless to create  <br />
                      interactive UIs.
                    </p>
                </article>

                <article>
                <img src={img2}   alt="icono2" />
                    <h4>Components</h4>
                    <p>
                      Build encapsulated <br />
                      components that     <br />
                      manage their state.
                    </p>
                </article>

                <article>
                <img src={img3}   alt="icono3" />
                    <h4>Single-Way</h4>
                    <p>
                      A set of immutable <br />
                      values are passed to <br />
                      the component's.
                      
                    </p>
                </article>

                <article>
                <img src={img4}   alt="icono4" />
                    <h4>JSX</h4>
                    <p>
                      Statically-typed <br />
                      designed to run on <br />
                      modern browsers.
                    </p>
                </article>


      </section>







    </div>
  );

    







}

export default App;
