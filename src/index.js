import React from "react"
import ReactDom from 'react-dom'

const element =  (
   

    <div>
    <div className = "top-container">
    <div className = "image-container">
    <img src="./images/ironhack-logo.svg"  className = "ironhack-logo"/>
    <img src="./images/menu-top.svg" className = "nav-image" />
    </div>

    <div className = "text-container">
    <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and
        become a super Ninja developer.
    </p>
     <div class = "awesome-button">
     <button>Awesome!</button>
     </div>
     
    </div>
    </div>

    
    
    
    
    <div className="container">
      <div className="card">
        <img src="./images/icon1.png"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src="./images/icon2.png"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img src="./images/icon3.png"/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="card">
        <img src="./images/icon4.png"/>
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>

    
    )




ReactDom.render(element, document.getElementById('root'));


