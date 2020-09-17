import React from "react";

const App = () => {
  return (
    <div>
      <div id="main-content">
        <div id="left" class="float-left">
          <img src="../images/ironhack-logo.svg" />
          <h1> Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch,to become an Ninka
            Developer.
          </p>
          <button> Awesome!</button>
        </div>
        <div id="right" class="float-right">
          <img class="sticky-top" src="../images/menu-top.svg" />
        </div>
      </div>

      <div id="picture-row">
        <img src="../images/icon1.png" />
        <img src="../images/icon2.png" />
        <img src="../images/icon3.png" />
        <img src="../images/icon4.png" />
      </div>
    </div>
  );
};

export default App;
