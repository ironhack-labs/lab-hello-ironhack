import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const root = document.getElementById("root");

/*
ReactDOM.render(
    <div>
      <div className="toto">text</div>
      <img src="/images/icon1.png" />
      <div>feahfafa</div>
    </div>,
    document.getElementById("root")
  );

  */

ReactDOM.render(
  [
    <img
      className="logo"
      src="/images/ironhack-logo.svg"
      alt="ironhack logo"
    />,
    <nav>
      {" "}
      <img src="/images/menu-top.svg" alt="menu" />{" "}
    </nav>,
    <div id="main_container">
    <div className="main">
      <h1>Say hello to ReactJS</h1>
      <aside>
        {" "}
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer.
      </aside>
      <button className="btn_awesome">Awesome !</button>
    </div>
    <div id="react_background">
    <img src="/images/react-logo.svg" id="react_top" alt="react big top" />
    <img src="/images/react-logo.svg" id="react_middle" alt="react middle" />
    <img src="/images/react-logo.svg" id="react_bottom" alt="react bottom" />

    <div className="column">
    <img src="/images/react-logo.svg" alt="react 1" />
    <img src="/images/react-logo.svg" alt="react 2" />
    <img src="/images/react-logo.svg" alt="react 3" />
    <img src="/images/react-logo.svg" alt="react 4" />
    </div>
    
    </div>
    
    </div>,

    <div id="features">
      {" "}
      <div className="feature_item"> 
      <img src="/images/icon1.png" alt="feature 1" />
      <h4>Declarative</h4>
      <aside>React makes it painless tocreate interactive UIs</aside>
      
      </div>

      <div className="feature_item">
      <img src="/images/icon2.png" alt="feature 2" />
      <h4>Components</h4>
      <aside>Build encapsulated components that manage their state</aside>
      </div>


      <div className="feature_item">
      <img src="/images/icon3.png" alt="feature 3" />
      <h4>Single way</h4>
      <aside>A set of immutable values are passed to the components.</aside>
      </div>


      <div className="feature_item">
      <img src="/images/icon4.png" alt="feature 4" />
      <h4>JSX</h4>
      <aside>Statically-typed, designed to run on modern broswers.</aside>
      </div>
    </div>,
  ],
  root
);



console.log(`listening on http://localhost:3000/`);
