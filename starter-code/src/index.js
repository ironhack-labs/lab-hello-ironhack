import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const style1 = { backgroundColor: "black", color: "white" };
const style2 = { backgroundColor: "white", color: "black" };
const img1 = "/images/icon1.png";
const img2 = "/images/icon2.png";
const img3 = "/images/icon3.png";
const img4 = "/images/icon4.png";

const greeting = (
  <div>
    <div style={style1} class="heading">
      <h1>Say Hello to ReactJS</h1>
      <p>
        You will learn a frontend framework from scratch, to become a nika
        Developer.
      </p>
      <div style={style2} width="20px">
        <h2>Awesome!</h2>
      </div>
    </div>

    <div class="flex">
      <div>
        <img src={img1} width="150"></img>
        <h2>Declarative</h2>
        <p>React makes it painless to create interative UIs</p>
      </div>
      <div>
        <img src={img2} width="150"></img>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={img3} width="150"></img>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div>
        <img src={img4} width="150"></img>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(greeting, document.getElementById("root"));
