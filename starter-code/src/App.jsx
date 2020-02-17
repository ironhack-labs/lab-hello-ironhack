import React from 'react'
import "../public/style/App.css";


export default function App ()  {
    return (  
        <div>
        <div className="Background">
          <div className="NavBar">
            <img src="images/ironhack-logo.svg"></img>
            <img src="images/menu-top.svg"></img>
          </div>
          <div className="HeaderPart">
            <div className="Header">
              <h1 className="Title">Say hello to ReactJS</h1>
              <p className="Text">You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
              <button className="Button">Awesome!</button>
            </div>
            <div className="HeaderPart WidthLogos">
              <div className="DisplayLogo">
                <img src="images/react-logo.svg" class="Logo"></img>
                <img src="images/react-logo.svg" class="Logo0 Logo1"></img>
                <img src="images/react-logo.svg" class="Logo2 Logo3"></img>
              </div>
              <div className="DisplayLogo2">
                <img src="images/react-logo.svg" class="Logo4"></img>
                <img src="images/react-logo.svg" class="Logo5"></img>
                <img src="images/react-logo.svg" class="Logo6"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="Icons">
          <div className="Item">
            <img src="images/icon1.png"></img>
            <div className="TextBox">
              <p className="ItemTitle">Declarative</p>
              <p className="ItemText">React makes it painless to create interactive UIs.</p>
            </div>
          </div>
          <div>
            <img src="images/icon2.png"></img>
            <div className="TextBox">
              <p class="ItemTitle">Components</p>
              <p class="ItemText">Build encapsulated components that manage their state.</p>
            </div>
          </div>
          <div className="Item">
            <img src="images/icon3.png"></img>
            <div className="TextBox">
              <p class="ItemTitle">Single-Way</p>
              <p class="ItemText">A set of immutable values are passed to component's.</p>
            </div>
          </div>
          <div className="Item">
            <img src="images/icon4.png"></img>
            <div className="TextBox">
              <p class="ItemTitle">JSX</p>
              <p class="ItemText">Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </div>
      </div>
    )

}

