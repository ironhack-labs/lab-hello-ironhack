import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const element = (
  <Fragment>
    <header>
      <section>
        <div>
          <image src="./public/images/ironhack-logo.svg" />
          <image src="./public/images/menu-top.svg" />
        </div>
      </section>
    </header>
    <section>
      <div class="hero-background">
        <h1 style={{ color: "white" }} class="heading">
          Say hello to ReactJS
      </h1>
        <p style={{ color: "white" }}>
          You will learn a Frontend framework from scratch, to become a Ninka
          Developer.
      </p>
        <p style={myStyle}>Second Paragraph</p>
        <button class="button">Awesome!</button>
      </div>
      <div>
        <image src="./public/images/icon1.png" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <image src="./public/images/icon2.png" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <image src="./public/images/icon3.png" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div>
        <image src="./public/images/icon4.png" />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </section>
  </Fragment>
);

ReactDOM.render(
  element,
  document.getElementById('root')
)
