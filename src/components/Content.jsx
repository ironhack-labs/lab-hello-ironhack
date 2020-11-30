import React from "react";
import "./Content.css";

function Content() {
  return (
    <div>
      <div class="mainContent">
        <nav>
          <img src="/images/ironhack-logo.svg"></img>
          <img src="/images/menu-top.svg"></img>
        </nav>
        <div className="heroContainer">
          <h1>Say hello to ReactJS</h1>
          <h2>
            You will learn how to use the most popular fronted library and
            become super Ninja developer.
          </h2>
          <button>AWESOME!</button>
        </div>
      </div>
      <div className="articleContainer">
        <article>
          <img src="/images/icon1.png"></img>
          <h3>Declarative</h3>
          <p>Random text</p>
        </article>
        <article>
          <img src="/images/icon2.png"></img>
          <h3>Components</h3>
          <p>Random text</p>
        </article>
        <article>
          <img src="/images/icon3.png"></img>
          <h3>Single-way</h3>
          <p>Random text</p>
        </article>
        <article>
          <img src="/images/icon4.png"></img>
          <h3>JSX</h3>
          <p>Random text</p>
        </article>
      </div>
    </div>
  );
}

export default Content;
