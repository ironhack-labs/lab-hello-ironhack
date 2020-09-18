import React from "react";
import "./app.css";

const App = () => {
    return (
        <div>
          <section className="first-div">
            <nav>
              <img src="../images/ironhack-logo.svg"></img>
              <img src="../images/menu-top.svg"></img>
            </nav>
            <section>
              <div>
                <h1>Say hello to ReactJS</h1>
                <p>
                  You will learn a frontend framework form scratch, to become an
                  amazing developer.
                </p>
              </div>
              <button>Awesome!</button>
            </section>
          </section>
        <h1 className='app'>Say Hello to ReactJs</h1>
        <h2>Declarative</h2>
          <p>React makes it painless to create UIs.</p>
        </div>
        <div className="detail-box">
          <img src="../images/icon2.png"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="detail-box">
          <img src="../images/icon3.png"></img>
          <h2>Single-way</h2>
        <button>Awesome</button>
        <button>Awesome!</button>
      <section className="container">
        <div className="row">
            <div className="box">
              <img src="../images/icon1.png" alt="Declarative"/>
              <h4>Declarative</h4>
              <h4 className= "box-heading">Declarative</h4>
              <p>React makes it painless to create interactive UIS</p>
            </div>
            <div className="box">
              <img src="../images/icon2.png" alt="Declarative"/> 
              <h4>Components</h4>
              <h4 className= "box-heading">Components</h4>
              <p>You will learn a frontend framework form scratch, to become an
              amazing developer.</p>
            </div>
            <div className="box">
              <img src="../images/icon3.png" alt="Declarative"/>
              <h4>Single Way</h4>
              <h4 className= "box-heading">Single-Way</h4>
              <p>A set of inmutable values are passed to the components</p>
            </div>
            <div className="box">
              <img src="../images/icon4.png" alt="Declarative"/>
              <h4>JSX</h4>
              <h4 className= "box-heading">JSX</h4>
              <p>Statically typed,designed to run on modern browsers</p>
            </div>
        </div>
      </section>
 </div>
  )
};
export default App;