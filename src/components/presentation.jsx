import React from "react";

function Presentation(props) {
  return (
    <div className="presentation-container">
      <nav id="navbar">
        <img src="images/ironhack-logo.svg" />
        <img src="images/menu-top.svg" />
      </nav>
      <div id="message-container">
        <h1 id="title">Say hello to ReactJS</h1>
        <p id="message">
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </p>
        <button id="awesome-button">Awesome!</button>
      </div>
    </div>
  );
}

export default Presentation;
