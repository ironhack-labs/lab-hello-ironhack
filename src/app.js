import React from "react";

const App = () => {
  return (
    <div>
      <div id="main-content">
        <div id="left">
          <img src="../images/ironhack-logo.svg" />
          <div id="left-text">
            <h1> Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch,to become an
              Ninka Developer.
            </p>
            <button id="btn"> Awesome!</button>
          </div>
        </div>
        <div id="right">
          <img class="sticky-top" src="../images/menu-top.svg" />
        </div>
      </div>

      <div id="picture-row">
        <div class="pic-div">
          <img src="../images/icon1.png" />
          <h3 class="pic-head"> Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="pic-div">
          <img src="../images/icon2.png" />
          <h3> Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div class="pic-div">
          <img src="../images/icon3.png" />
          <h3> Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div class="pic-div">
          <img src="../images/icon4.png" />
          <h3> JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
};

export default App;
