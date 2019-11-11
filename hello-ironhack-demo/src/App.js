import React from 'react';
import './App.css';
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";

import Ironhack from "./images/ironhack-logo.svg";
import Navlogo from "./images/menu-top.svg";


function App() {
  return (
    <section className = 'main'>
      <section className= 'top'>
        <div className="navbar">
          <img src={Ironhack}></img>
          <img src={Navlogo} className="navlogo"></img>
        </div>
        <div className="main-body">
          <div className="hello-div">
            <h1 className="hello-header">Say hello to ReactJs</h1>
          </div>
          <div className="main-p">
            You will learn a Frontend framework from scratch, to become a Ninka developer.
          </div>
          <div>
            <button>
              Awesome!
            </button>
          </div>
        </div>

      </section>
      <section className="bottom">
        <div className="img-section">
          <div>
            <img src={Icon1}></img>
          </div>
          <div>
          <h2>Declarative</h2>
          </div>
          <div>
            <p className="img-p">React makes it painless to create interactive UI's.</p>
          </div>
        </div>
        <div className="img-section">
          <div>
          <img src={Icon2}></img>
          </div>
          <div>
          <h2>Components</h2>
          </div>
          <div>
            <p className="img-p">Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="img-section">
          <div>
          <img src={Icon3}></img>
          </div>
          <div>
            <h2>Single-Way</h2>
          </div>
          <div>
            <p className="img-p">A set of immutable values that are passed to the components.</p>
          </div>
        </div>
        <div className="img-section">
          <div>
          <img src={Icon4}></img>
          </div>
          <div>
          <h2>JSX</h2>
          </div>
          <div>
            <p className="img-p">Statically typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
